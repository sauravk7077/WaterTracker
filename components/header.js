import React from 'react';
import {Appbar} from 'react-native-paper';
/**
 * Returns Header component
 * @return {JSX}      Returns Header component
 */
export default function Header({navigation, scene, previous}) {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined ?
      options.headerTitle :
      options.title !== undefined ?
      options.title :
      scene.route.name;
  const _goBack = () => {
    navigation.goBack();
  };
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={_goBack} />: undefined}
      <Appbar.Content title={title}/>

    </Appbar.Header>
  );
};
