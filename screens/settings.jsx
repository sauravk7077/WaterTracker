import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';
import {TextInput, Text, Button} from 'react-native-paper';
import * as yup from 'yup';

const schema = yup.object({
  goal: yup.string()
      .required()
      .test('is-num-between-500-10000',
          'Goal must be a number between 500 and 12000.',
          (val) => {
            return parseInt(val) > 500 && parseInt(val) < 12000;
          }),
});

/**
 * Returns a view full of settings
 * @return {JSX} settings component
 */
export default function Settings({navigation}) {
  const settings = useSelector((state)=> state.settings);
  return (<View>
    <Formik
      initialValues={{...settings}}
      validationSchema={schema}
    >
      {(props) => (
        <View style={styles.container}>
          <Text style={styles.text}>You goal</Text>
          <TextInput
            style={styles.inptu}
            onChangeText={props.handleChange('goal')}
            value={props.values.goal}
          />
          <Text style={styles.errorText}>{props.errors.goal}</Text>
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
  text: {
    margin: 5,
  },
  errorText: {
    margin: 5,
    color: 'maroon',
  },
  input: {
    margin: 5,
  },
  button: {
    alignSelf: 'flex-start',
    margin: 5,
  },
};
