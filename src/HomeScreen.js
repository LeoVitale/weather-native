//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import Header from './components/Header';

import { getWeather } from './api/api';

// create a component
class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Buscar Cidade',
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
      const { navigate } = this.props.navigation;
      getWeather(this.state.text).then(response => {
        console.log(response);
        if(response.data.message !== "Error"){
          this.setState({...this.state, cityWeather: response.data});
          navigate('Weather', { city: this.state.text, cityWeather:  this.state.cityWeather})
        }else {
          alert('Serviço Indisponível');
        }
        
      }).catch(error => (
        alert('Serviço Indisponível')
      ));
    }
  }

  render() {
    
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          returnKeyType={"done"}
          onKeyPress={this.handleSearchText} />
        <Header />
        <Text>App</Text>
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
    backgroundColor: '#ccc',
  },
});

//make this component available to the app
export default HomeScreen;

