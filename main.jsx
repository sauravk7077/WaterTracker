import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
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
/**
 * Returns HomeStack wrapped in PaperProvider
 * @return {JSX}      Returns App component
 */
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <HomeStack />
    </PaperProvider>
  );
}
