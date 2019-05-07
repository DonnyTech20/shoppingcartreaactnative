import React from 'react';
import Watch from './components/Watch';
import Laptop from './components/Laptop';
import Body from './components/Body';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>

        <Text>
        Don Your 1st Shopping Cart!
        </Text>
        
        <Laptop /> 
        <Watch />
        <Body />

    </View>

       
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
