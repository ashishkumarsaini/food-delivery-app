import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Linking from "expo-linking";
import { DrawerNavigator } from "./DrawerNavigator";
import { DishScreen, RestraurentScreen, LoginScreen, RegisterScreen, CartScreen, GetStartedScreen } from "../screens";
import { useAuth } from "../../providers/auth-provider";

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [Linking.createURL("/"), "fooddelivery://"],
  config: {
    screens: {
      Restraurent: "restaurant/:restraurentId",
    },
  },
};

export const RootStack = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        {
          isAuthenticated ? (
            <>
              <Stack.Screen name="GetStarted" component={GetStartedScreen} />
              <Stack.Screen name="Home" component={DrawerNavigator} />
              <Stack.Screen name="Dish" component={DishScreen} />
              <Stack.Screen name="Restraurent" component={RestraurentScreen} />
              <Stack.Screen name="Cart" component={CartScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
