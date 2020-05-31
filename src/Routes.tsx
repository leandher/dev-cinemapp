import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from './components';
import type { TabBarIcon } from './@types/icons';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor: '#F5C518',
        inactiveTintColor: '#FAFAFA',
        activeBackgroundColor: '#282a36',
        inactiveBackgroundColor: '#282a36',
      }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarAccessibilityLabel: 'Buscar',
            tabBarIcon: ({ color, size }: TabBarIcon) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarAccessibilityLabel: 'Favoritos',
            tabBarIcon: ({ color, size, focused }: TabBarIcon) => (
              <Icon
                name={focused ? 'star' : 'star-o'}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
