import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import AddWater from '../screens/addWater';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Navigator>
      <Screen component={Home} name="Home" options={{ headerShown: false }} />
      <Screen component={AddWater} name="AddWater" options={{ title: 'Add Water' }} />
    </Navigator>
  </NavigationContainer>
);
