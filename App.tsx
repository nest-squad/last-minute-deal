import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { HomeScreen } from './src/HomeScreen';
import { SplashScreen } from './src/SplashScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.textContainer}>
      <SplashScreen />
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
