import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HomeStack } from '.';
import { LoginScreen } from '../screens/LoginScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const [user, setUser] = useState<string | null>();

  AsyncStorage.getItem('useruid').then(value => {
    setUser(value);
  });

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#F87171' }}>
      <Tab.Screen
        options={{ headerShown: false }}
        name={'Home'}
        component={HomeStack}
      />
      {user ? (
        <Tab.Screen
          options={{
            headerTitleStyle: {
              color: '#F87171',
            },
          }}
          name={'Profile'}
          component={ProfileScreen}
        />
      ) : (
        <Tab.Screen
          options={{
            headerTitleStyle: {
              color: '#F87171',
            },
          }}
          name={'Sign In'}
          component={LoginScreen}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTab;
