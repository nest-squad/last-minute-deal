import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'tailwind-react-native-classnames';

export const Login = () => {
  const handleNavigate = (screenName: any) => {
    try {
      navigation.navigate(screenName);
    } catch (err) {
      throw err;
    }
  };
  const setTokenToStorage = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      throw e;
    }
  };
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 justify-center bg-red-100 rounded-xl`}>
      <Button
        title="Үйлчлүүлэгч"
        onPress={() => {
          handleNavigate('BottomTab');
          setTokenToStorage('status', 'costumer');
        }}
      />
      <Button
        onPress={() => {
          handleNavigate('BottomTab');
          setTokenToStorage('status', 'seller');
        }}
        title="Борлуулагч"
      />
    </View>
  );
};
