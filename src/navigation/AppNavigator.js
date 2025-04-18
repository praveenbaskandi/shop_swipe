import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ScreenName} from '../constants/ScreenNames';
import {stackScreenOptions, tabScreenOptions} from './NavigationUtil';
//Screen Imports
import SwipePage from '../pages/SwipePage';
import ContentPage from '../pages/ContentPage';
import ProfilePage from '../pages/ProfilePage';
import LikedPage from '../pages/LikedPage';

const Tab = createBottomTabNavigator();
const FinalStack = createNativeStackNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenName.SavePage}
      screenOptions={tabScreenOptions}>
      <Tab.Screen name={ScreenName.SwipePage} component={SwipePage} />
      <Tab.Screen name={ScreenName.LikedPage} component={LikedPage} />
      <Tab.Screen name={ScreenName.ProfilePage} component={ProfilePage} />
    </Tab.Navigator>
  );
};

const AppNavigator = ({initialRoute = ScreenName.Dashboard}) => {
  return (
    <FinalStack.Navigator
      screenOptions={stackScreenOptions}
      initialRouteName={initialRoute}>
      <FinalStack.Screen
        name={ScreenName.Dashboard}
        component={DashboardScreen}
      />
      <FinalStack.Screen
        name={ScreenName.ContentPage}
        component={ContentPage}
      />
    </FinalStack.Navigator>
  );
};

export default AppNavigator;
