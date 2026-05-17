import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import { HomeScreen } from '../screens/Home';
import SearchScreen from '../screens/Search';
import OrdersScreen from '../screens/Orders';
import ProfileScreen from '../screens/Profile';
import { COLORS } from '../../constants/theme';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: ['home', 'home-outline'],
  Search: ['search', 'search-outline'],
  Orders: ['heart', 'heart-outline'],
  Profile: ['person', 'person-outline'],
} as const;

type TabName = keyof typeof tabIcons;

const TabIcon = ({ focused, routeName }: { focused: boolean; routeName: TabName }) => {
  const [activeIcon, inactiveIcon] = tabIcons[routeName];

  return (
    <View style={[styles.iconWrap, focused && styles.iconWrapActive]}>
      <Ionicons
        name={focused ? activeIcon : inactiveIcon}
        size={19}
        color={focused ? '#FFFFFF' : COLORS.clay}
      />
    </View>
  );
};

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
      tabBarItemStyle: styles.tabItem,
      tabBarHideOnKeyboard: true,
      tabBarIcon: ({ focused }) => (
        <TabIcon focused={focused} routeName={route.name as TabName} />
      ),
    })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    alignSelf: 'center',
    bottom: 24,
    width: 300,
    height: 65,
    borderRadius: 999,
    backgroundColor: COLORS.peach,
    overflow: 'hidden',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  iconWrap: {
    top: 12,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: COLORS.peach,
  },
  iconWrapActive: {
    backgroundColor: COLORS.ink,
    boxShadow: 'none',

  },
});
