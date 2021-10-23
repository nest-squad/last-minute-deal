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
          color: '#F87171',
        },
      }}
      initialRouteName="Splash">
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
      <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};
