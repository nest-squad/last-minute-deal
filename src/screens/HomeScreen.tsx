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
import algoliasearch from 'algoliasearch';

const searchClient = algoliasearch(
  '6D5STJPDYJ',
  'ba5c2c9ccbfc6003d9a43a58d448ad5b',
);

export const HomeScreen = () => {
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [status, setStatus] = useState<string>('customer');
  const [isVisible, setVisible] = useState<boolean>(false);

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
            phone: tmp.phoneNumber,
            end_date: tmp.end_date,
            discountPercent: tmp.discount,
          };
        });
        setProducts(data);
      })
      .catch(e => console.log(e.message));
    // getData();
  }, [status]);

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('status');
  //     if (value !== null) {
  //       setStatus(value);
  //       console.log(value);
  //     }
  //   } catch (e) {
  //     // error reading value
  //     console.log('here is error');
  //   }
  // };

  return (
    <View style={tw`flex-1 bg-white justify-center pt-4`}>
      <TextInput
        placeholder={'Search'}
        style={tw`bg-gray-200 mx-6 h-8 rounded-full p-2 text-black`}
      />
      {status === 'customer' ? (
        <FlatList
          numColumns={2}
          bounces
          alwaysBounceHorizontal={false}
          renderItem={({ item }: { item: any }) => <ProductCard {...item} />}
          data={products}
        />
      ) : (
        // <InstantSearch searchClient={searchClient} indexName="dev_nestacademy">
        //   <SearchBox
        //     className="search-bar"
        //     translations={{ placeholder: 'Search for Movies' }}
        //   />
        //   <Hits hitComponent={ProductCard} />
        // </InstantSearch>
        <View style={tw`flex-1 bg-white pt-4`}>
          <Button
            onPress={() => setVisible(!isVisible)}
            title={'Бүтээгдэхүүн оруулах'}
            color={'#88491e'}
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
