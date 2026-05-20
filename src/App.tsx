// import * as SplashScreen from 'expo-splash-screen';
import { StatusBar, View } from 'react-native';
import { RootStack } from './navigation/navigators/RootNavigator';
import { AuthProvider } from './providers/auth-provider';
import { CartProvider } from './providers/cart-provider';
import { OrdersProvider } from './providers/orders-provider';

// SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <AuthProvider>
        <OrdersProvider>
          <CartProvider>
            <RootStack />
          </CartProvider>
        </OrdersProvider>
      </AuthProvider>
    </>
  );
}
