import React, { Component } from 'react'
import ImageView from './ImageView';
import { View,
     StyleSheet,
     } from 'react-native'

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>

      <View style={styles.column1}>
      <ImageView imageSource={require('../img/mobilephone.jpg')} />
      
      </View>
      <View style={styles.column2}>

      </View>
      <View style={styles.full}>

      </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: 'blue',
    },
    column1: {

    },
    column2: {

    },
    full: {

    },

});
