import React, {useState} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import {TextInput, Text, Button} from 'react-native-paper';
import * as yup from 'yup';
import {globalStyles} from '../styles/globalStyles';
import {saveSetting} from '../dataHandle/settingsHandler';

const schema = yup.object({
  goal: yup.string()
      .required()
      .test('is-num-between-500-10000',
          'Goal must be a number between 500 and 12000.',
          (val) => {
            return parseInt(val) > 500 && parseInt(val) < 12000;
          }),
  startTime: yup.string().
      required()
      .test('is-right-time',
          'It should be correct time format (24 hrs)',
          (val)=> {
            const x = val.split(':');
            return parseInt(x[0])>=0 && parseInt(x[0]) <=24 &&
         parseInt(x[1]) >= 0 && parseInt(x[1]) <= 60;
          }),
  endTime: yup.string().
      required()
      .test('is-right-time',
          'It should be correct time format (24 hrs)',
          (val)=> {
            const x = val.split(':');
            return parseInt(x[0])>=0 && parseInt(x[0]) <=24 &&
         parseInt(x[1]) >= 0 && parseInt(x[1]) <= 60;
          }),
});

/**
 * Returns a view full of settings
 * @return {JSX} settings component
 */
export default function Settings({navigation}) {
  const settings = useSelector((state)=> state.settings);
  return (<View style={globalStyles.container}>
    <Formik
      initialValues={{...settings}}
      validationSchema={schema}
      onSubmit={(values, action) => {
        saveSetting(values);
      }}
    >
      {(props) => (
        <View style={styles.container}>
          <Text style={globalStyles.text}>You goal</Text>
          <TextInput
            style={styles.input}
            onChangeText={props.handleChange('goal')}
            keyboardType='number-pad'
            value={props.values.goal}
          />
          <Text style={styles.errorText}>{props.errors.goal}</Text>
          <Text>Start Time</Text>
          <TextInput
            styles={styles.input}
            value={props.values.startTime}
            onChange={props.handleChange('startTime')}
          />
          <Text style={styles.errorText}>{props.errors.startTime}</Text>
          <Text>End Time</Text>
          <TextInput
            styles={styles.input}
            value={props.values.endTime}
            onChange={props.handleChange('endTime')}
          />
          <Text style={styles.errorText}>{props.errors.endTime}</Text>
          <Button
            style={styles.button}
            onPress={props.handleSubmit}
            mode='contained'
          >Save</Button>
        </View>
      )}
    </Formik>
  </View>);
}

Settings.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  errorText: {
    margin: 5,
    color: 'maroon',
  },
  input: {
    margin: 5,
    color: '#fff',
  },
  button: {
    alignSelf: 'flex-start',
    margin: 5,
  },
};
