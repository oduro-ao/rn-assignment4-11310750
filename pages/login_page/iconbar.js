import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const apple = require('../icons/apple.png');
const google = require('../icons/google.png');
const facebook = require('../icons/facebook.png');

export default function IconBar () {
  return (
    <View style={styles.iconBar}>
      <View style={styles.iconContainer}>
        <Image source={apple} style={styles.icon} />
      </View>
      <View style={styles.iconContainer}>
        <Image source={google} style={styles.icon} />
      </View>
      <View style={styles.iconContainer}>
        <Image source={facebook} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 10, 
  },
  icon: {
    
  },
});

