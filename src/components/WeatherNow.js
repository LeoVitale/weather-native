//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getWeather } from '../api/api';
import weatherIcon from '../utils/icons';

// create a component
class WeatherNow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather:{}
    }
  }

  componentWillMount() {
    getWeather(this.props.city)
      .then(response => {
        this.setState({...this.state, weather: response.data});
      });
  }
  
  render() {
    const {weather} = this.state;
    
    if(!Object.getOwnPropertyNames(weather).length > 0) return (<View></View>);
    return (
      <View style={styles.container}>

        <Text
          style={{
            fontFamily: 'WeatherIcons-Regular',
            fontSize: this.props.iconSize,
            color:'#fff'
          }}>
          {weatherIcon(weather.weather[0].icon)}
        </Text>
        
        <Text style={{fontSize:40, color:'#fff',fontWeight: '100'}}>
          {parseInt(weather.main.temp) + '°C'}
        </Text>
        
        
        <Text style={{fontSize:14, color:'#fff'}}>
          {`${weather.name}, ${weather.sys.country}`}
        </Text>
        <Text style={{fontSize:20, color:'#fff',fontWeight: 'bold'}}>
          {weather.weather[0].main}
        </Text>
        

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
    backgroundColor: '#8E44AD'
  },
});

//make this component available to the app
export default WeatherNow;

