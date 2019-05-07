import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default class Watch extends Component {
	render() {
		return (
			
				<Image 
				source={require('../img/smartwatch.jpg')} 
				style={styles.watches} 
               />
		);
	}
}

const styles = StyleSheet.create({
	watches: {
		height: 250,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
