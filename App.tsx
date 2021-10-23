import React from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { RootStack } from './src/navigation';
import { app } from './firebase';
import firebase from '@react-native-firebase/app';

const App = () => {
  if (!firebase.apps.length) {
    app();
  } else {
    firebase.app();
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <RootStack />
    </SafeAreaView>
  );
};

export default App;
