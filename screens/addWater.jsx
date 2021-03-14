import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {addWater} from '../dataHandle/waterHandler';
import PropTypes from 'prop-types';
import {globalStyles} from '../styles/globalStyles';

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
  const handleCardClick = async (amount) => {
    await addWater(amount);
    navigation.navigate('Home');
  };
  return (
    <View
      style={globalStyles.container}>
      <FlatList
        style={styles.flatList}
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
                  margin: 5,
                }
              }
              onPress={() => {
                handleCardClick(item.size);
              }}>
              <Card.Content style={styles.card}>
                <Text style={styles.text}>{item.size}</Text>
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
  flatList: {
    backgroundColor: '#001520',
  },
  cardBox: {
    flex: 1,
    backgroundColor: '#001520',
    margin: 2,
    justifyContent: 'center',
    height: 200,
    borderWidth: 5,
    borderColor: '#001520',
    borderRadius: 20,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
  },
});

AddWater.propTypes = {
  navigation: PropTypes.object.isRequired,
};
