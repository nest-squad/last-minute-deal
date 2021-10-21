import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {LoginScreen} from './src/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.textContainer}>
      <LoginScreen />
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
