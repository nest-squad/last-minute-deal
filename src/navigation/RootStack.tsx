import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import BottomTab from './BottomTab';
import { DetailScreen } from '../screens/DetailScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SplashScreen } from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
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
          name="HomeStack"
          component={HomeStack}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Sign In',
          }}
          name="Login"
          component={LoginScreen}
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
          color: '#d79c66',
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
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};
