// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, View } from 'react-native';
import { RootStack } from './navigation/navigators/RootNavigator';

// SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <RootStack />
    </>
  );
}
