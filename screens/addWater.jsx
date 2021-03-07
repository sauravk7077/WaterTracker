import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Title, TouchableRipple} from 'react-native-paper';
import {addWater} from '../dataHandle/waterHandler';

const sizes = [
  {
    id: 1,
    size: 50,
  },
  {
    id: 2,
    size: 100,
  },
  {
    id: 3,
    size: 250,
  },
  {
    id: 4,
    size: 500,
  },
  {
    id: 5,
    size: 1000,
  },
  {
    id: 6,
    size: 2000,
  },
];

/**
 * Returns AddWater component filled with a list of water card components
 * @return {JSX}      Returns AddWater component
 */
export default function AddWater({navigation}) {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  const handleCardClick = async (amount) => {
    await addWater(amount);
    navigation.navigate('Home');
  };
  return (
    <View
      style={styles.container}
      onLayout={(event) => setLayout(event.nativeEvent.layout)}>
      <FlatList
        numColumns={2}
        data={sizes}
        renderItem={({item}) => (
          <View style={styles.cardBox}>
            <Card
              bordered
              style={
                {
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                }
              }
              onPress={() => {
                handleCardClick(item.size);
              }}>
              <Card.Content style={styles.card}>
                <Title>{item.size}</Title>
              </Card.Content>

            </Card>
          </View>)

        }>

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 22,
    justifyContent: 'center',
  },
  cardBox: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'white',
    height: 200,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
