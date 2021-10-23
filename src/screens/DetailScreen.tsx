import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  useWindowDimensions,
  StyleSheet,
  Button,
} from 'react-native';
import AntDesignicons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';

export const DetailScreen = () => {
  const dimensions = useWindowDimensions();
  const route = useRoute();
  const [changeColor, setChangeColor] = useState(false);
  const onSave = () => setChangeColor(preState => !preState);

  const style = StyleSheet.create({
    imgStyle: {
      width: dimensions.width,
      height: 300,
    },
  });

  const {
    title,
    description,
    price,
    image,
    end_date,
    orgName,
    location,
    phone,
    discountPercent,
  }: any = route.params;

  return (
    <View style={tw`flex-1 bg-white justify-around`}>
      <Image
        source={{
          uri: image,
        }}
        style={style.imgStyle}
      />

      <View style={tw`flex-row justify-between items-center`}>
        <View>
          <Text style={tw`py-1 text-red-400 font-bold text-3xl`}>{title}</Text>
          <View style={tw`flex-row my-1`}>{end_date}</View>
        </View>
        <Text style={tw`py-2 text-gray-900 font-bold text-2xl`}>
          {price} ₮ | {discountPercent}
        </Text>
      </View>
      {/* restaurant name, location, phone number, heart */}
      <View style={tw`mt-5 mb-2 flex-row justify-between items-center`}>
        <View>
          <View style={tw`flex-row m-1`}>
            <Ionicons name="restaurant" size={21} color="#F15B5D" />
            <Text style={tw`mx-1`}>{orgName}</Text>
          </View>
          <View style={tw`flex-row m-1`}>
            <Ionicons name="location-sharp" size={21} color="#F15B5D" />
            <Text style={tw`mx-1`}>{location}</Text>
          </View>
          <View style={tw`flex-row m-1`}>
            <AntDesignicons name="contacts" size={21} color="#F15B5D" />
            <Text style={tw`mx-1`}>{phone}</Text>
          </View>
        </View>
        <AntDesignicons
          name={changeColor ? 'heart' : 'hearto'}
          size={25}
          color="#F15B5D"
          onPress={onSave}
        />
      </View>

      {/* Description */}
      <View style={tw`my-2`}>
        <Text>Товч тайлбар</Text>
        <Text style={tw`my-2 text-gray-900 font-semibold`}>{description}</Text>
      </View>

      <Button
        title={'Байршил авах'}
        onPress={() => Linking.openURL('http://map.google.com')}
      />
    </View>
  );
};
