import React from 'react';
import {View, StyleSheet} from 'react-native';
import {List, Colors, Text} from 'react-native-paper';
import {timeToHourMinuteString} from '../misc/misc';
import {useSelector} from 'react-redux';

/**
 * Returns the detailed view of all the water consumed in a day
 * @return {JSX}      Returns ViewWaterConsumed component
 */
export default function ViewWaterConsumed({navigation}) {
  const waterConsumed = useSelector((state)=>state.water);
  const waterDetail = [];
  // eslint-disable-next-line guard-for-in
  for (const x in waterConsumed) {
    if (waterConsumed[x]) {
      waterDetail.push(<List.Item
        key ={x}
        title={waterConsumed[x].amount + 'ml'}
        left={(props) => <List.Icon color={Colors.blue500} icon="water"/>}
        right={
          (props) => <View style={
            styles.listRight}>
            <Text >
              {
                timeToHourMinuteString(waterConsumed[x].time)
              }</Text>
          </View>
        }
      />);
    };
  }
  return (
    <View style={styles.container}>
      {waterDetail}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listRight: {
    flex: 1,
    justifyContent: 'center',
  },
});
