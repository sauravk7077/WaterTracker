import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
/**
 * Returns a view full of settings
 * @return {JSX} settings component
 */
export default function Settings({navigation}) {
  console.log(navigation.constructor.name);
  return (<View></View>);
}

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};
