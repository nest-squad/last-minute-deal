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
// import { app } from '../firebase';
import firestore from '@react-native-firebase/firestore';

import { ProductCardType } from './entity/Product';

const dummy: ProductCardType[] = [
  {
    id: '1',
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 10995,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image:
      'https://firebasestorage.googleapis.com/v0/b/nest-app-3f9ac.appspot.com/o/243864927_2654794174667222_4641748946496895499_n.jpg?alt=media&token=384a0084-b2b8-412e-9805-e30a2b8482d9',
    discountPercent: 40,
  },
];

export const HomeScreen = () => {
  const [products, setProducts] = useState<ProductCardType[]>(dummy);
  const [status, setStatus] = useState<string>();
  const [isVisible, setVisible] = useState<boolean>();

  useEffect(() => {
    getProducts();
    getData();
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

  const getProducts = async () => {
    firestore()
      .collection('products')
      .get()
      .then(product => {
        console.log(product.docs);
      });

    setProducts(products);
  };

  return (
    <View style={tw`flex-1 bg-white justify-center`}>
      {status === 'costumer' ? (
        <FlatList
          bounces
          alwaysBounceHorizontal={false}
          renderItem={({ item }: { item: ProductCardType }) => (
            <ProductCard {...item} />
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
