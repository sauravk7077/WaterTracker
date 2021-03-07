import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, IconButton, Colors, FAB} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 0,
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
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={50}
        tintColor="white"
        backgroundColor= {Colors.orange600}
        arcSweepAngle={180}
        lineCap='round'
        rotation={-90}
      >
        {()=><Text>{total}</Text>}
      </AnimatedCircularProgress>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={handlePress}
      />
      <Button onPress={handleWaterConsumedBtn}>See Water Consumed</Button>
    </View>
  );
}
