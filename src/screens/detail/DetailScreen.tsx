import React, { useState } from 'react';
import { View, Text, useWindowDimensions, Image } from 'react-native';
import AntDesignicons from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';
// import { useNavigation } from '@react-navigation/core';

type ProductDetail = {
  id: number;
  image: string;
  category: string;
  dishName: string;
  price: number;
  review: number;
  restaurantName: string;
  location: string;
  phoneNumber: string;
  description: string;
};

const ProductDetailData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
    category: 'salad',
    dishName: 'Egg Salad',
    price: 19,
    review: 288,
    restaurantName: 'Bonafide Delicatessen and Cafe',
    location: '118 Kane St Brooklyn, NY 11231',
    phoneNumber: '(718) 237-4070',
    description:
      'The classic pile-up of toasted English muffins topped with seared Canadian bacon, poached eggs and creamy hollandaise sauce you usually reserve for weekend brunch plans.',
  },
];

export const DetailScreen = () => {
  const dimensions = useWindowDimensions();
  const [changeColor, setChangeColor] = useState(false);
  const onSave = () => setChangeColor(preState => !preState);
  // const naviagtionBack = useNavigation();

  // const { image, dishName, price, review, restaurantName, location, phoneNumber, description } = product;
  const DetailHeader = () => {
    return (
      <>
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            elevation: 1,
            top: 10,
            left: 10,
          }}>
          <Ionicons
            name="chevron-back"
            size={25}
            color="#F15B5D"
            // onPress={() => naviagtionBack.goBack()}
          />
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
          }}
          style={{
            width: dimensions.width,
            height: 300,
          }}
        />
      </>
    );
  };

  const DetailMiddle = () => {
    return (
      <>
        {/* dish name, price and rating */}
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`py-1 text-red-400 font-bold text-3xl`}>
              Egg Benedict
            </Text>
            <View style={tw`flex-row my-1`}>
              <AntDesignicons name="star" size={20} color="#F15B5D" />
              <AntDesignicons name="star" size={20} color="#F15B5D" />
              <AntDesignicons name="star" size={20} color="#F15B5D" />
              <AntDesignicons name="star" size={20} color="#F15B5D" />
              <AntDesignicons name="staro" size={20} />
              <Text style={tw`mx-2`}>(288 reviews)</Text>
            </View>
          </View>
          <Text style={tw`py-2 text-gray-900 font-bold text-2xl`}>$19</Text>
        </View>
        {/* restaurant name, location, phone number, heart */}
        <View style={tw`mt-5 mb-2 flex-row justify-between items-center`}>
          <View>
            <View style={tw`flex-row m-1`}>
              <Ionicons name="restaurant" size={21} color="#F15B5D" />
              <Text style={tw`mx-1`}>Bonafide Delicatessen and Cafe</Text>
            </View>
            <View style={tw`flex-row m-1`}>
              <Ionicons name="location-sharp" size={21} color="#F15B5D" />
              <Text style={tw`mx-1`}>118 Kane St Brooklyn, NY 11231</Text>
            </View>
            <View style={tw`flex-row m-1`}>
              <AntDesignicons name="contacts" size={21} color="#F15B5D" />
              <Text style={tw`mx-1`}>(718) 237-4070</Text>
            </View>
          </View>
          <AntDesignicons
            name={changeColor ? 'heart' : 'hearto'}
            size={25}
            color="#F15B5D"
            onPress={onSave}
          />
        </View>
      </>
    );
  };

  const DetailFooter = () => {
    return (
      <>
        {/* serving, prep time, cook time and description */}
        <View style={tw`flex-row justify-around`}>
          <View>
            <Text>Servings</Text>
            <Text style={tw`text-gray-900 font-bold text-lg`}>2p</Text>
          </View>
          <View>
            <Text>Prep Time</Text>
            <Text style={tw`text-gray-900 font-bold text-lg`}>25m</Text>
          </View>
          <View>
            <Text>Cook Time</Text>
            <Text style={tw`text-gray-900 font-bold text-lg`}>20m</Text>
          </View>
        </View>
        {/* Description */}
        <View style={tw`my-2`}>
          <Text>Description</Text>
          <Text style={tw`my-2 text-gray-900 font-semibold`}>
            The classic pile-up of toasted English muffins topped with seared
            Canadian bacon, poached eggs and creamy hollandaise sauce you
            usually reserve for weekend brunch plans.
          </Text>
        </View>
      </>
    );
  };
  
  return (
    <View>
      <DetailHeader />
      <View style={tw`p-4`}>
        <DetailMiddle />
        <View style={tw`border-t my-2 border-gray-200`} />
        <DetailFooter />
      </View>
    </View>
  );
};
