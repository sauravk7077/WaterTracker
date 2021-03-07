import React, {useState} from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import HomeStack from './routes/homeStack';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './reduxHanlde/store';
import {fillTheEntireContainer} from './dataHandle/waterHandler';
import AppLoading from 'expo-app-loading';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'tomato',
  },
};
/**
 * Returns HomeStack wrapped in PaperProvider
 * @return {JSX}      Returns App component
 */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  if (isLoading) {
    return (
      <AppLoading
        startAsync={fillTheEntireContainer}
        onFinish={()=> setIsLoading(false)}
        onError={console.warn}
      />);
  } else {
    return (
      <PaperProvider theme={theme}>
        <ReduxProvider store={store}>
          <HomeStack />
        </ReduxProvider>
      </PaperProvider>
    );
  }
}
