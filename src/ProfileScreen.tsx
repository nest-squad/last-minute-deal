import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-white flex-1 justify-center`}>
      <Button onPress={() => navigation.navigate('Login')} title="Log out" />
    </View>
  );
};
