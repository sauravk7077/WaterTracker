import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {getTotalAmount} from '../dataHandle/waterHandler';
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
  const counter = useSelector((state) => state.water);
  const handlePress = () => {
    navigation.navigate('AddWater');
  };
  const [totalWater, setTotalWater] = useState(null);
  const setWater = async () => {
    const t = 0;
    if (counter != null && Object.keys(counter).length != 0) {
      // eslint-disable-next-line guard-for-in
      for (const ob in counter) {
        t += ob.amount;
      }
    }

    setTotalWater(t);
  };

  if (totalWater == null) {
    setWater();
    return (
      <View style={styles.container}>
        <Text>Loading</Text>
      </View>);
  } else {
    return (
      <View style={styles.container}>
        <Text>{}</Text>
        <Button mode="outlined" onPress={handlePress}>
          <Text>Add Water</Text>
        </Button>
      </View>
    );
  }
}
