//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import moment from 'moment';
moment.locale('pt-br');
import {
  Left,
  Body,
  ListItem,
  Thumbnail,
  Text,
  Button
} from 'native-base';

import weatherIcon from '../utils/icons';
let date = 0

// create a component
const ForecastItem = (props) => {
  const { item } = props;
  if (date !== moment.unix(item.dt).date()) {
    date = moment.unix(item.dt).date()
    return (<ListItem thumbnail style={{marginTop:30}}>
      <Text style={{fontSize:30, fontWeight:'100'}}>{moment.unix(item.dt).format('LL')}</Text>
    </ListItem>)
  }
  return (
    <ListItem thumbnail>
      <Left style={{ width: 70 }}>
        <Text style={{ fontFamily: 'WeatherIcons-Regular', fontSize: 40, color: '#8E44AD' }}>{weatherIcon(item.weather[0].icon)}</Text>
      </Left>
      <Body>
        <Text>{moment
          .unix(item.dt)
          .format('HH:mm')}</Text>
        <Text note style={{fontSize:30}}>
          {parseInt(item.main.temp) + '°C'} 
        </Text>
      </Body>
    </ListItem>
  );
};

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
export default ForecastItem;
