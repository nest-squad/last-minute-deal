import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {HomeScreen} from './src/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.textContainer}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default App;
