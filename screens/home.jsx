import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, Colors, FAB, Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import PropTypes from 'prop-types';
import {globalStyles} from '../styles/globalStyles';

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
  listIcon: {
    position: 'absolute',
    margin: 5,
    right: 0,
    bottom: 0,
  },
  settingsBtn: {
    position: 'absolute',
    margin: 5,
    right: 0,
    top: 0,
  },

});

/**
 * Returns home component
 * @return {JSX}      Returns Home component
 */
export default function Home({navigation}) {
  const waterConsumed = useSelector((state) => state.water);
  const goalAmount = useSelector((state)=>state.settings).goal;
  const handlePress = () => {
    navigation.navigate('AddWater');
  };
  const handleWaterConsumedBtn = () => {
    navigation.navigate('ViewWaterConsumed');
  };
  const handleSettingBtn = () => {
    navigation.navigate('Settings');
  };
  let total = 0;
  // eslint-disable-next-line guard-for-in
  for (const x in waterConsumed) {
    if (waterConsumed[x]?.amount) {
      total += waterConsumed[x].amount;
    };
  }
  const percentCompleted = Math.round(total/ goalAmount * 100);
  return (
    <View style={StyleSheet.compose(globalStyles.container, styles.container)}>
      <AnimatedCircularProgress
        size={250}
        width={15}
        fill={percentCompleted}
        tintColor={Colors.blue200}
        backgroundColor='#fff'
        arcSweepAngle={270}
        lineCap='round'
        rotation={-135}
      >
        {()=><Text style={globalStyles.text}>{total} ml</Text>}
      </AnimatedCircularProgress>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={handlePress}
      />
      <IconButton
        icon={(props) => <MaterialIcons {...props} name="list"/>}
        color={Colors.red500}
        size={25}
        onPress={handleWaterConsumedBtn}
        style={styles.listIcon}
      />
      <IconButton
        icon="cog"
        color={Colors.red500}
        size={25}
        style={styles.settingsBtn}
        onPress={handleSettingBtn}
      />
    </View>
  );
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
