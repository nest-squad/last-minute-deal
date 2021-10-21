import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../HomeScreen';
import BottomTab from './BottomTab';
import { DetailScreen } from '../screens/detail/DetailScreen';
import { Login } from '../Login';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            marginHorizontal: 16,
            backgroundColor: 'transparent',
          },
        }}
        initialRouteName="BottomTab">
        <Stack.Screen
          options={{ headerShown: false }}
          name="BottomTab"
          component={BottomTab}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: '#F87171',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen
        options={{
          headerTitle: 'Deal list',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerTitle: 'Product Detail' }}
        name="Detail"
        component={DetailScreen}
      />
    </Stack.Navigator>
  );
};
