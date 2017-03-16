//import liraries
import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';

import { getWeatherImg } from './api/api';

import moment from 'moment';

// create a component
class WeatherScreen extends Component {

  static navigationOptions = {
    title: ({ state }) => `${state.params.city}`,
  };

  constructor(props) {
    super(props);
    this.state = {
      cityWeather: {}
    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ ...this.state, cityWeather: params.cityWeather });
  }

  renderItem = () => {
    const { list, city } = this.state.cityWeather;
    console.log(list);
    return list.map((item, index) => {
      console.log(getWeatherImg(item.weather[0].icon))
      return (<View key={item.dt}>
        <Text >
          <Text>{moment.unix(item.dt).format('HH:mm')} </Text>
          <Text> {parseInt(item.main.temp)} graus</Text>
        </Text>
        <Image style={styles.stretch} source={{uri:getWeatherImg(item.weather[0].icon)}} />
      </View>)
    })
  }

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Text>WeatherScreen</Text>
        <ScrollView>
          {this.renderItem()}
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});

//make this component available to the app
export default WeatherScreen;
