import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import AddWater from '../screens/addWater';
import ViewWaterConsumed from '../screens/viewWaterConsumed';
const {Navigator, Screen} = createStackNavigator();
import Header from '../components/header';
import Settings from '../screens/settings';

/**
 * Returns home component
 * @return {JSX}      Returns Home component
 */
export default function HomeStack() {
  return (
    <NavigationContainer>
      {/* eslint-disable-next-line react/display-name*/}
      <Navigator screenOptions={{header: (props) => <Header {...props}/>}}>
        <Screen component={Home} name="Home" options={{headerShown: false}} />
        <Screen
          component={AddWater}
          name="AddWater"
          options={{title: 'Add Water'}}
        />
        <Screen
          component={ViewWaterConsumed}
          name="ViewWaterConsumed"
          options={{title: 'Water Consumed'}}
        />
        <Screen
          component={Settings}
          name="Settings"
        />
      </Navigator>
    </NavigationContainer>
  );
}
