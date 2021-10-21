import { useRoute } from '@react-navigation/core';
import React from 'react';
import { View, Text, Linking } from 'react-native';
import tw from 'tailwind-react-native-classnames';

export const DetailScreen = () => {
  const route = useRoute();
  const { title, description, price, image } = route.params;
  return (
    <View style={tw`flex-1 bg-white justify-around`}>
      <Text>Detail screen</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
      <Text>{image}</Text>
      <Text
        style={tw`text-blue-400`}
        onPress={() => Linking.openURL('http://map.google.com')}>
        Google map
      </Text>
    </View>
  );
};
