import React, { useState } from 'react';
import { View, Text, Alert, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/core';

export const LoginScreen = ({}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setTokenToStorage = AsyncStorage.setItem;
  const navigation = useNavigation();
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async response => {
        const user = response.user;

        await setTokenToStorage('useruid', user.uid);
        await setTokenToStorage('status', 'costumer');

        Alert.alert('Successfully Logged In', `Hello, ${email}`);
        navigation.navigate('Home');
      })
      .catch((e: any) => Alert.alert(e.message));
  };

  return (
    <View style={tw`ios:pt-4 android:pt-2 `}>
      <Text style={tw`text-red-200`}>Login Screens</Text>
      <TextInput
        onChangeText={text => setEmail(text)}
        placeholder="Enter Your Email"
      />
      <TextInput
        onChangeText={text => setPassword(text)}
        placeholder="Enter Your password"
        secureTextEntry
      />
      <Button title="Log in" onPress={signIn} />
    </View>
  );
};
