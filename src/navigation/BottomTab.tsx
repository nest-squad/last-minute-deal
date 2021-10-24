import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesignicons from 'react-native-vector-icons/AntDesign';
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
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#88491e',
        tabBarInactiveTintColor: '#dbc8bc',
      }}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <AntDesignicons color={'#1e5d88'} name="home" size={22} />
          ),
        }}
        name={'Home'}
        component={HomeStack}
      />
      {user ? (
        <Tab.Screen
          options={{
            tabBarIcon: () => (
              <AntDesignicons color={'#1e5d88'} name="profileScreen" />
            ),
          }}
          name={'Profile'}
          component={ProfileScreen}
        />
      ) : (
        <Tab.Screen
          options={{
            headerTitleStyle: {
              color: '#88491e',
            },
            tabBarIcon: () => (
              <AntDesignicons color={'#1e5d88'} name="user" size={22} />
            ),
          }}
          name={'Sign In'}
          component={LoginScreen}
        />
      )}
    </Tab.Navigator>
  );
};

export default BottomTab;
