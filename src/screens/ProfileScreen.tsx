import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  const logOutTrigger = () => {
    AsyncStorage.removeItem('useruid');
    navigation.navigate('Home');
  };

  return (
    <View style={tw`bg-white flex-1 justify-center`}>
      <Button onPress={logOutTrigger} title="Log out" />
    </View>
  );
};
