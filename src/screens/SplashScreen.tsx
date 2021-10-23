import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import img from '../assets/Food_logo.png';

export const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`bg-red-400 w-full h-full`}>
      <Image
        source={img}
        style={tw`justify-center self-center m-5 w-3/4 h-1/2 m-10`}
      />
      <Text
        style={tw`justify-center self-center text-white font-bold text-2xl`}>
        Welcome to last minute deal
      </Text>
      <TouchableOpacity style={tw`m-10`}>
        <Text
          style={tw`rounded-full justify-center self-center bg-white text-blue-900 py-5 px-10 font-bold text-2xl`}
          onPress={() => navigation.navigate('Home')}>
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
};
