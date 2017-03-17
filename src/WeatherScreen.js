//import liraries
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {
  Container,
  Content,
  Left,
  Body,
  ListItem,
  Thumbnail,
  Text,
  Button
} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";

import { getWeatherImg, getWeather } from './api/api';
import ForecastItem from './components/ForecastItem';
import WeatherNow from './components/WeatherNow';

// create a component
class WeatherScreen extends Component {

  static navigationOptions = {
    title: ({state}) => `${state.params.city}`
  };

  constructor(props) {
    super(props);
    this.state = {
      forecastList: {}
    }
  }

  componentWillMount() {
    const {params} = this.props.navigation.state;
    this.setState({
      ...this.state,
      forecastList: params.forecastList
    });
  }

  renderItem = () => {
    const {list, city} = this.state.forecastList;
    return list.map((item, index) => {
      return (
        <ForecastItem key={item.dt} item={item}/>
      )
    })
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Grid>
          <Row size={35}>
            <WeatherNow city={params.city} iconSize={50}/>
          </Row>
          <Row size={65}>
            <Content>
              {this.renderItem()}
            </Content>
          </Row>
        </Grid>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 50
  },
  scrollView: {
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  }
});

//make this component available to the app
export default WeatherScreen;
