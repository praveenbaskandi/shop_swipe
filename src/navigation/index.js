import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import AppNavigator from './AppNavigator';

const AppRouter = () => {
  // const navigationRef = useRef();
  const navigationRef = useNavigationContainerRef();

  return (
    <View style={styles.rootContainer}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
  },
});

export default AppRouter;
