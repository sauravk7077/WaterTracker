import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, IconButton, Colors} from 'react-native-paper';
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
  const handleWaterConsumedBtn = () => {
    navigation.navigate('ViewWaterConsumed');
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
      <IconButton
        icon="plus" color={Colors.orange800}
        size={50}
        onPress={handlePress}
      />
      <Button onPress={handleWaterConsumedBtn}>See Water Consumed</Button>
    </View>
  );
}
