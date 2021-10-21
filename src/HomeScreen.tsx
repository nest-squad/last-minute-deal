import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Modal,
  Button,
  Pressable,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProductCard } from './components/ProductCard';

const products: productType[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 10995,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    discountPercent: 40,
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 2230,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    discountPercent: 40,
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 5599,
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    discountPercent: 40,
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15990,
    description:
      'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    discountPercent: 40,
  },
  {
    id: 5,
    title: 'Silver Dragon Station Chain Bracelet',
    price: 6950,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    discountPercent: 40,
  },
];

export type productType = {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  discountPercent: number;
};

export const HomeScreen = () => {
  const [status, setStatus] = useState<string>();
  const [isVisible, setVisible] = useState<boolean>();
  useEffect(() => {
    getData();
    console.log('done!');
  }, [status]);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('status');
      if (value !== null) {
        // value previously stored
        setStatus(value);
        console.log(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View style={tw`flex-1 bg-white justify-center`}>
      {status === 'costumer' ? (
        <FlatList
          bounces
          alwaysBounceHorizontal={false}
          renderItem={({ item }) => (
            <ProductCard
              discountPercent={item.discountPercent}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
            />
          )}
          data={products}
        />
      ) : (
        <View style={tw`flex-1 bg-white justify-center`}>
          <TextInput placeholder={'Search'} style={tw`bg-gray-200`} />
          <Button
            onPress={() => setVisible(!isVisible)}
            title={'Бүтээгдэхүүн оруулах'}
          />
          <Modal
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setVisible(!setVisible);
            }}
            animationType="fade"
            transparent={true}
            visible={isVisible}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={tw`flex-1`}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Successfully uploaded</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setVisible(!isVisible)}>
                    <Text style={styles.textStyle}>Hide</Text>
                  </Pressable>
                </View>
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      )}
    </View>
  );
};

// gerleegiin detail screen ireed
// navigation hiine console.log iin orond

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
