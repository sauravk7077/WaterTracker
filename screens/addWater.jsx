import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {addWater} from '../dataHandle/waterHandler';
import PropTypes from 'prop-types';

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
      style={styles.container}>
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
                  borderRadius: 5,
                  borderColor: 'white',
                  borderWidth: 5,
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
    margin: 2,
    justifyContent: 'center',
    height: 200,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

AddWater.propTypes = {
  navigation: PropTypes.object.isRequired,
};
