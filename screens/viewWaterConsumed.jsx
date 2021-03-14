import React from 'react';
import {View, StyleSheet} from 'react-native';
import {List, Colors, Text} from 'react-native-paper';
import {timeToHourMinuteString} from '../misc/misc';
import {useSelector} from 'react-redux';
import {globalStyles} from '../styles/globalStyles';
import PropTypes from 'prop-types';


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
        titleStyle={globalStyles.text}
        left={(props) => <List.Icon color={Colors.blue500} icon="water"/>}
        right={
          (props) => <View style={
            styles.listRight}>
            <Text style={globalStyles.text}>
              {
                timeToHourMinuteString(waterConsumed[x].time)
              }</Text>
          </View>
        }
      />);
    };
  }
  return (
    <View style={globalStyles.container}>
      {waterDetail}

    </View>
  );
}

ViewWaterConsumed.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  listRight: {
    flex: 1,
    justifyContent: 'center',
  },
});

