//import liraries
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Container, Content, Item, Input, Icon} from 'native-base';
import {Col, Row, Grid} from "react-native-easy-grid";

//import Header from './components/Header';

import {getWeather} from './api/api';

// create a component
class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Buscar Cidade'
  };

  constructor(props) {
    super(props);
    this.state = {
      text: 'São Paulo',
      cityWeather: {}
    };
  }

  handleSearchText = (event) => {
    if (event.nativeEvent.key === "Enter") {
      const {navigate} = this.props.navigation;
      getWeather(this.state.text).then(response => {
        console.log(response);
        if (response.data.message !== "Error") {
          this.setState({
            ...this.state,
            cityWeather: response.data
          });
          navigate('Weather', {
            city: this.state.text,
            cityWeather: this.state.cityWeather
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
          <Row size={1}>
              <Item rounded style={{
                backgroundColor: '#fff',
                borderColor: '#fff',
                width: '100%',
                height: 50
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

            </Row>
            
          </Grid>
      </Container>
    );
  }
}

//make this component available to the app
export default HomeScreen;
