import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Title, TouchableRipple} from 'react-native-paper';
import {saveData, readData} from '../dataHandle/dataHanlder';

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
export default function AddWater() {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  return (
    <View
      style={styles.container}
      onLayout={(event) => setLayout(event.nativeEvent.layout)}>
      <FlatList
        numColumns={2}
        data={sizes}
        renderItem={({item}) => (
          <TouchableRipple style={styles.card} onPress={async ()=>{
            console.log(await readData('key'));
          }}>
            <Card style={{width: layout.width/2 - 5}}>
              <Card.Content>
                <Title>{item.size}</Title>
              </Card.Content>
            </Card>
          </TouchableRipple>)

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
    backgroundColor: 'skyblue',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    height: 200,
    alignSelf: 'center',
  },
});
