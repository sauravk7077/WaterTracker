import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {} from '../dataHandle/waterHandler';

import {useSelector} from 'react-redux';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * Returns home component
 * @return {JSX}      Returns Home component
 */
export default function Home({navigation}) {
  const waterConsumed = useSelector((state) => state.water);
  const handlePress = () => {
    navigation.navigate('AddWater');
  };
  let total = 0;
  for (const x in waterConsumed) {
    if (waterConsumed[x]?.amount) {
      total += waterConsumed[x].amount;
    };
  }

  return (
    <View style={styles.container}>
      <Text>{total}</Text>
      <Button mode="outlined" onPress={handlePress}>
        <Text>Add Water</Text>
      </Button>
    </View>
  );
}
