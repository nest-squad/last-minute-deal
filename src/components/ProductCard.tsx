import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { ProductCardType } from '../entity/Product';

export const ProductCard: any = ({
  title,
  price,
  image,
  discountPercent,
  description,
  orgName,
  location,
  phone,
  end_date,
}: ProductCardType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`flex-1 mt-4 mx-4 shadow-md`}
      onPress={() =>
        navigation.navigate('Detail', {
          title,
          price,
          image,
          discountPercent,
          description,
          orgName,
          location,
          phone,
          end_date,
        })
      }>
      <View
        style={[
          tw`flex-1 bg-red-200 p-4 rounded-2xl flex-col`,
          { backgroundColor: '#d79c66' },
        ]}>
        <View
          style={tw` flex-1 flex-row rounded-tr-2xl rounded-bl-2xl justify-between`}>
          <Image
            source={{ uri: image }}
            style={tw`h-32 w-32 rounded-tr-2xl rounded-bl-2xl`}
          />
        </View>
        <View style={tw`flex-1 mt-2 justify-between`}>
          <Text style={tw`text-yellow-900 my-1 font-bold`}>{title}</Text>
          <View style={tw`flex-row justify-between my-1 items-center`}>
            <Text style={tw`text-white font-black`}>{price}₮</Text>
            <View
              style={tw`bg-yellow-900 h-12 w-12 justify-center rounded-full items-center`}>
              <Text style={tw`text-white font-black`}>{discountPercent}%</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
