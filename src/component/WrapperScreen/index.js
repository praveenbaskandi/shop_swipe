/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext, useState, useCallback} from 'react';
import {StyleSheet, ActivityIndicator, StatusBar} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

import {Colors} from '../../constants/Colors';
import {LoadingView, Wrapper} from './styled';

function WrappedComponent(
  ScreenComponent,
  transparentBg = false,
  options = {
    initialLoader: false,
  },
) {
  return props => {
    const {initialLoader} = options;
    const [isLoading, setLoading] = useState(initialLoader);
    const insets = useContext(SafeAreaInsetsContext);

    const showLoader = useCallback(() => {
      !isLoading && setLoading(true);
    }, [isLoading]);

    const hideLoader = useCallback(() => {
      setLoading(false);
    }, []);

    return (
      <Wrapper transparent={transparentBg}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          translucent
          backgroundColor={Colors.bgColor}
        />
        <ScreenComponent
          insets={insets}
          isLoading={isLoading}
          showLoader={showLoader}
          hideLoader={hideLoader}
          {...props}
        />
        {isLoading && (
          <LoadingView>
            <ActivityIndicator
              style={styles.loaderView}
              animating={isLoading}
              size="large"
              color={Colors.black}
            />
          </LoadingView>
        )}
      </Wrapper>
    );
  };
}

const styles = StyleSheet.create({
  loaderView: {
    height: 100,
    width: 100,
  },
});

export default WrappedComponent;
