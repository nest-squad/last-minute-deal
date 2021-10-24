import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  useWindowDimensions,
  ScrollView,
  Button,
} from 'react-native';
import AntDesignicons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feathericons from 'react-native-vector-icons/Feather';
import tw from 'tailwind-react-native-classnames';
import moment from 'moment';

export const DetailScreen = () => {
  const dimensions = useWindowDimensions();
  const route = useRoute();
  const [changeColor, setChangeColor] = useState(false);
  const onSave = () => setChangeColor(preState => !preState);

  const {
    image,
    title,
    price,
    discountPercent,
    description,
    location,
    orgName,
    phone,
    end_date,
  }: any = route.params;

  const DetailHeader = () => {
    return (
      <View style={tw`relative`}>
        {/* Image and heart */}
        <Image
          source={{ uri: image }}
          style={{
            width: dimensions.width,
            height: 300,
          }}
        />
        <View style={tw`absolute right-5 bottom-5 p-3 rounded-full bg-white`}>
          <AntDesignicons
            name={changeColor ? 'heart' : 'hearto'}
            size={25}
            color="#F15B5D"
            onPress={onSave}
          />
        </View>
      </View>
    );
  };

  const DetailMiddle = () => {
    console.log(end_date);
    return (
      <>
        {/* dish name and price */}
        <View style={tw`flex-row justify-between items-center py-2`}>
          <Text style={tw`text-gray-900 font-bold text-2xl`}>{title}</Text>
          <Text style={tw`text-red-500 font-bold text-lg`}>{price}₮</Text>
        </View>
        {/* location */}
        <View style={tw`flex-row`}>
          <Ionicons name="location-sharp" size={21} />
          <Text style={tw`mx-1`}>{location}</Text>
        </View>
        {/* Discount and end date */}
        <View style={tw`flex-row justify-between mt-7 mb-4`}>
          <View style={tw`flex-row m-1 items-center`}>
            <View style={tw`p-3 rounded-full bg-yellow-300`}>
              <Feathericons name="percent" size={25} color="#fff" />
            </View>
            <View style={tw`mx-2`}>
              <Text style={tw`text-lg text-black font-semibold`}>
                {discountPercent}%
              </Text>
              <Text>Discount</Text>
            </View>
          </View>
          <View style={tw`flex-row m-1 items-center`}>
            <View style={tw`p-3 rounded-full bg-red-400`}>
              <Feathericons name="calendar" size={25} color="#fff" />
            </View>
            <View style={tw`mx-2`}>
              <Text style={tw`text-lg text-black font-semibold`}>
                {moment(end_date).fromNow()}
              </Text>
              <Text>End Date</Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  const DetailFooter = () => {
    return (
      <>
        {/* Description */}
        <View style={tw`my-2`}>
          <Text style={tw`text-black uppercase text-lg border-b w-20`}>
            Details
          </Text>
          <Text style={tw`my-2 font-normal text-gray-500`}>{description}</Text>
        </View>
        {/* restaurant name, phone number */}
        <View style={tw`mb-2`}>
          <Text style={tw`mb-1`}>Name: {orgName}</Text>
          <Text style={tw``}>Contact: {phone}</Text>
        </View>
        <Button
          color={'#88491e'}
          title={'Байршил авах'}
          onPress={() =>
            Linking.openURL(
              'https://www.google.com/maps/place/Хүннү+худалдааны+төв,+Yaarmag+Road,+Улаанбаатар/@47.8774049,106.851311,16z/data=!4m5!1m2!2m1!1stous+les+jours!3m1!1s0x5d969363e5cbb19f:0x6141661cea814655',
            )
          }
        />
      </>
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw`bg-white`}>
      <DetailHeader />
      <View style={tw`p-4`}>
        <DetailMiddle />
        <DetailFooter />
      </View>
    </ScrollView>
  );
};
