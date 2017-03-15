//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Header from './components/Header';

import {getWeather} from './api/api';

const weather = getWeather().then(response => {
  console.log(response);
})

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Text>App</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0000'
  }
});

//make this component available to the app
export default App;
