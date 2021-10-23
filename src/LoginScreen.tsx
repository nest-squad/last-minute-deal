import React, { useState } from 'react';
import { View, Text, Alert, Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import tw from 'tailwind-react-native-classnames';

export const LoginScreen = ({}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const user = response.user;
        AsyncStorage.setItem('useruid', user.uid);
        Alert.alert('Successfully Logged In', `Hello, ${email}`);
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
