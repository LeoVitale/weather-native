/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/HomeScreen';
import WeatherScreen from './src/WeatherScreen';

const RouterApp = StackNavigator({
  Home: { screen: HomeScreen },
  Weather: {screen : WeatherScreen }
});

AppRegistry.registerComponent('weatherNative', () => RouterApp);
