//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class WeatherScreen extends Component {

  static navigationOptions = {
    title: ({ state }) => `${state.params.city}`,
  };

  constructor(props) {
    super(props);
    console.log(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>WeatherScreen</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default WeatherScreen;
