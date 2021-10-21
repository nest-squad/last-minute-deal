import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeStack } from '.';
import { ProfileScreen } from '../ProfileScreen';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#F87171' }}>
      <Tab.Screen
        options={{ headerShown: false }}
        name={'Home'}
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          headerTitleStyle: {
            color: '#F87171',
          },
        }}
        name={'Profile'}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
