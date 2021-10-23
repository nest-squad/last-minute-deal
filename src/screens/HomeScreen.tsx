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
import { ProductCard } from '../components/ProductCard';
// import { app } from '../firebase';
import firestore from '@react-native-firebase/firestore';

import { ProductCardType } from '../entity/Product';

export const HomeScreen = () => {
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [status, setStatus] = useState<string>();
  const [isVisible, setVisible] = useState<boolean>();

  useEffect(() => {
    firestore()
      .collection('products')
      .get()
      .then(response => {
        let data = response.docs.map(product => {
          let tmp = product.data();
          return {
            id: product.id,
            title: tmp.title,
            price: tmp.price,
            description: tmp.description,
            category: tmp.category.name,
            image: tmp.imgUrl,
            orgName: tmp.orgName,
            location: tmp.location,
            phone: tmp.phone,
            end_date: tmp.end_date,
            discountPercent: tmp.discount,
          };
        });
        setProducts(data);
      })
      .catch(e => console.log(e.message));
    getData();
  }, [status]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('status');
      if (value !== null) {
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
          renderItem={({ item }: { item: any }) => <ProductCard {...item} />}
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
