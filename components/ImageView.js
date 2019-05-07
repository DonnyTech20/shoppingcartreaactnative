import React, { Component } from 'react'
import { View,
Image,
StyleSheet
 } from 'react-native'

export default class ImageView extends Component {
  render() {
    return (
      <View>
        <Image
        source={this.props.imageSource}
        styles={styles.image}
         />
      </View>
    );
  }
}
const styles= StyleSheet.create ({
    image: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
