import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
        color={focused ? COLORS.orange : COLORS.clay}
      />
    </View>
  );
};

export const TabNavigator = () => {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const tabBarWidth = 300;
  const tabBarLeft = (width - tabBarWidth) / 2;

  return (
    <View style={styles.navigatorShell}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          sceneStyle: styles.sceneContainer,
          tabBarShowLabel: false,
          tabBarStyle: [styles.tabBar, { bottom: insets.bottom + 18 }, { width: tabBarWidth, transform: [{ translateX: tabBarLeft }] }],
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
    </View>
  )
}

const styles = StyleSheet.create({
  navigatorShell: {
    flex: 1,
    backgroundColor: COLORS.clay,
  },
  sceneContainer: {
    backgroundColor: COLORS.clay,
    display: 'flex',
  },
  tabBar: {
    position: 'absolute',
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
    backgroundColor: COLORS.wine,
    boxShadow: 'none',
  },
});
