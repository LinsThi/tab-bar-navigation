import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { ButtonNew } from '~/components/ButtonNew';

import {
  HOME_SCREEN,
  NEW_SCREEN,
  NOTIFICATION_SCREEN,
  PROFILE_SCREEN,
  SEARCH_SCREEN,
} from '~/constants/routes';
import { Home } from '~/screens/Home';
import { New } from '~/screens/New';
import { Notification } from '~/screens/Notification';
import { Profile } from '~/screens/Profile';
import { Search } from '~/screens/Search';
import { COLORS } from '~/theme';

const Tab = createBottomTabNavigator();

export function RootStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.black,
            borderTopColor: 'transparent',
            paddingTop: 5,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: COLORS.red,
        }}
      >
        <Tab.Screen
          name={HOME_SCREEN}
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={SEARCH_SCREEN}
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
              <AntDesign name="search1" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name={NEW_SCREEN}
          component={New}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, focused }) => (
              <ButtonNew size={size} focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name={PROFILE_SCREEN}
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name={NOTIFICATION_SCREEN}
          component={Notification}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="bell" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
