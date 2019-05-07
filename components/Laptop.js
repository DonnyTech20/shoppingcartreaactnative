import React, { Component } from 'react'
import { Text, 
  View, 
  Image,
   StyleSheet,
   Dimensions 
   } from 'react-native'

export default class Laptop extends Component {
  render() {
    return (
      <View style={styles.laptops}>
      <Image
      source={require ('../img/showcase.jpeg')} 
      style={styles.showcases}
      />
        <Text style={styles.title}> Laptops For Sale </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  laptops: {
      height: 80,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      width: Dimensions.get('window').width,
      borderBottomWidth: 4,
      borderBottomColor: '#ccc',
  },
  showcases: {
    width: 80,
    height: 80,
   marginTop: 40,
},
title: {
  marginTop: 20,
  marginLeft: 10,
  color: 'blue',
  fontWeight: 'bold',
},
});