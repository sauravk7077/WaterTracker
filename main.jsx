import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import HomeStack from './routes/homeStack';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <HomeStack />
    </PaperProvider>
  );
}
