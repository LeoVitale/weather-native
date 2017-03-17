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

import weatherIcon from './utils/icons';

import {getWeatherImg} from './api/api';

import moment from 'moment';

// create a component
class WeatherScreen extends Component {

  static navigationOptions = {
    title: ({state}) => `${state.params.city}`
  };

  constructor(props) {
    super(props);
    this.state = {
      cityWeather: {}
    }
  }

  componentWillMount() {
    const {params} = this.props.navigation.state;
    this.setState({
      ...this.state,
      cityWeather: params.cityWeather
    });
  }

  renderItem = () => {
    const {list, city} = this.state.cityWeather;
    console.log(list);
    return list.map((item, index) => {
      console.log(getWeatherImg(item.weather[0].icon))
      return (
        <ListItem thumbnail key={item.dt}>
            <Left style={{width: 50}}>              
              <Text style={{fontFamily:'WeatherIcons-Regular', fontSize:30, color:'#ff0000'}}>{weatherIcon(item.weather[0].icon)}</Text>
            </Left>
            <Body>
              <Text>{moment
                .unix(item.dt)
                .format('HH:mm')}</Text>
              <Text note>
                {parseInt(item.main.temp)} graus
              </Text>
            </Body>
          </ListItem>
      )
    })
  }

  render() {
    console.log('render');
    return (

      <Container style={{backgroundColor: '#fff'}}>
        <Content>
          {this.renderItem()}
        </Content>
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
