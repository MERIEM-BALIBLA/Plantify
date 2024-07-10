import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>foo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});