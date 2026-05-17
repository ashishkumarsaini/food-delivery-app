import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { GetStartedScreen } from "../screens/GetStarted";
import { TabNavigator } from "./TabNavigator";
import { DishScreen } from "../screens";
import CartScreen from "../screens/Cart";

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="Home" component={TabNavigator} />
        <Stack.Screen name="Dish" component={DishScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
