import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { ProductCardType } from '../entity/Product';

export const ProductCard = ({
  title,
  price,
  image,
  discountPercent,
  description,
}: ProductCardType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`h-24 mt-4 mx-4 shadow-md`}
      onPress={() =>
        navigation.navigate('Detail', {
          title,
          price,
          image,
          discountPercent,
          description,
        })
      }>
      <View style={tw`flex-1 bg-red-200 p-4 rounded-2xl flex-row`}>
        <View style={tw`h-16 w-16 rounded-tr-2xl rounded-bl-2xl mr-4`}>
          <Image
            source={{ uri: image }}
            style={tw`h-16 w-16 rounded-tr-2xl rounded-bl-2xl`}
          />
        </View>
        <View style={tw`flex-col flex-initial`}>
          <Text style={tw``}>{title}</Text>
          <Text>{price}₮</Text>
          <Text>{discountPercent}% - discount</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
