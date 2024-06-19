import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const apple = require('../icons/apple.png');

export default function IconBar () {
  return (
    <View style={styles.iconBar}>
      <View style={styles.iconContainer}>
        <Image source={apple} style={styles.icon} />
      </View>
      <View style={styles.iconContainer}>
        <Image source={apple} style={styles.icon} />
      </View>
      <View style={styles.iconContainer}>
        <Image source={apple} style={styles.icon} />
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
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#f5f5f5',
    marginHorizontal: 10, // Add space between icons
  },
  icon: {
    width: 40,
    height: 40,
  },
});

