import React from 'react';
import { SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { RootStack } from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <RootStack />
    </SafeAreaView>
  );
};

export default App;
