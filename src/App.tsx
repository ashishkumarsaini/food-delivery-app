// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, View } from 'react-native';
import { RootStack } from './navigation/navigators/RootNavigator';
import { AuthProvider } from './providers/auth-provider';
import { CartProvider } from './providers/cart-provider';

// SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <AuthProvider>
        <CartProvider>
          <RootStack />
        </CartProvider>
      </AuthProvider>
    </>
  );
}
