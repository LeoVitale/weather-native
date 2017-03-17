//import liraries
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Container, Content, Item, Input, Icon} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";

//import Header from './components/Header';

import { getForecastList } from './api/api';
import WeatherNow from './components/WeatherNow';

// create a component
class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Buscar Cidade'
  };

  constructor(props) {
    super(props);
    this.state = {
      text: 'São Paulo',
      forecastList: {}
    };
  }

  handleSearchText = (event) => {
    if (event.nativeEvent.key === "Enter") {
      const {navigate} = this.props.navigation;
      getForecastList(this.state.text).then(response => {
        if (response.data.message !== "Error") {
          this.setState({
            ...this.state,
            forecastList: response.data
          });
          navigate('Weather', {
            city: this.state.text,
            forecastList: this.state.forecastList
          })
        } else {
          alert('Serviço Indisponível');
        }

      }).catch(error => (alert('Serviço Indisponível')));
    }
  }

  render() {

    return (

      <Container>
        <Grid>
          <Row size={1} style={{paddingLeft: 20,paddingRight: 20}}>
              <Item rounded style={{
                marginTop: 50,
                backgroundColor: '#fff',
                borderColor: '#fff',
                width: '100%',
                height: 50,
                paddingLeft:20,
                paddingRight:20
              }}>
                <Input
                  placeholder='Rounded Textbox'
                  onChangeText={(text) => this.setState({text})}
                  value={this.state.text}
                  returnKeyType={"done"}
                  onKeyPress={this.handleSearchText}/>
              </Item>
            </Row>
            <Row style={{ backgroundColor: '#8E44AD' }} size={3}>
              <WeatherNow city={this.state.text} iconSize={90}/>
            </Row>
            
          </Grid>
      </Container>
    );
  }
}

//make this component available to the app
export default HomeScreen;
