import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

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
  const handlePress = () => {
    navigation.navigate('AddWater');
  };
  return (
    <View style={styles.container}>
      <Button mode="outlined" onPress={handlePress}>
        <Text>Add Water</Text>

      </Button>
    </View>
  );
}
