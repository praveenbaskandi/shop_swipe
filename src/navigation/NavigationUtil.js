import React from 'react';

import {ScreenName} from '../constants/ScreenNames';
import {Colors} from '../constants/Colors';
import IconShopClick from '../assets/svgs/img_tab_shop_click.svg';
import IconShopUnClick from '../assets/svgs/img_tab_shop_unclick.svg';
import IconSaveClick from '../assets/svgs/img_tab_like_click.svg';
import IconSaveUnClick from '../assets/svgs/img_tab_like_unclick.svg';
import IconProfileClick from '../assets/svgs/img_tab_profile_click.svg';
import IconProfileUnClick from '../assets/svgs/img_tab_profile_unclick.svg';
import {BottomButton} from './styled';

export const stackScreenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

export const tabScreenOptions = ({route}) => ({
  tabBarIcon: ({focused}) => {
    if (route.name === ScreenName.SwipePage) {
      return focused ? (
        <IconShopClick height={30} width={30} />
      ) : (
        <IconShopUnClick height={30} width={30} />
      );
    } else if (route.name === ScreenName.LikedPage) {
      return focused ? (
        <IconSaveClick height={30} width={30} />
      ) : (
        <IconSaveUnClick height={30} width={30} />
      );
    } else if (route.name === ScreenName.ProfilePage) {
      return focused ? (
        <IconProfileClick height={30} width={30} />
      ) : (
        <IconProfileUnClick height={30} width={30} />
      );
    }
  },
  tabBarShowLabel: false,
  tabBarActiveTintColor: Colors.brandColor,
  tabBarInactiveTintColor: Colors.greyColor,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: Colors.bottomTabColor,
    borderTopColor: Colors.bottomTabColor,
  },
  tabBarButton: props => (
    <BottomButton {...props} activeOpacity={0.7} style={[props.style]}>
      {props.children}
    </BottomButton>
  ),
  unmountOnBlur: false,
  lazy: true,
});

export const drawerScreenOptions = {
  drawerType: 'front',
  headerShown: false,
};
