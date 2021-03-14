import React, {useState} from 'react';
import {
  Provider as PaperProvider, DefaultTheme, Colors,
} from 'react-native-paper';
import HomeStack from './routes/homeStack';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './reduxHanlde/store';
import {fillTheEntireContainer} from './dataHandle/waterHandler';
import {loadSettingToStore} from './dataHandle/settingsHandler';
import AppLoading from 'expo-app-loading';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#001520',
    accent: Colors.blue500,
    text: '#fff',
    background: '#001520',
    surface: '#002437',
  },
  dark: true,
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
        startAsync={async () =>{
          fillTheEntireContainer();
          loadSettingToStore();
        }}
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
