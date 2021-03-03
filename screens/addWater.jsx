import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function AddWater() {
  return (
    <View style={styles.container}>
      <Text>Add Water Page</Text>
    </View>
  );
}
