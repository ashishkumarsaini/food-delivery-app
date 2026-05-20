import Ionicons from '@expo/vector-icons/Ionicons'
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer'
import { Pressable, StyleSheet, View } from 'react-native'
import { CustomText } from '../../components/text'
import { COLORS, FONTS } from '../../constants/theme'
import { useAuth } from '../../providers/auth-provider'
import { HelpScreen, SettingsScreen, OrdersScreen } from '../screens'
import { TabNavigator } from './TabNavigator'

const Drawer = createDrawerNavigator()

const drawerItems = [
  { label: 'My Orders', route: 'MyOrders', icon: 'bag-check-outline' },
  { label: 'Settings', route: 'Settings', icon: 'settings-outline' },
  { label: 'Help', route: 'Help', icon: 'help-circle-outline' },
] as const

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: styles.drawer,
        overlayColor: 'rgba(19, 3, 3, 0.32)',
        sceneStyle: styles.scene,
      }}
    >
      <Drawer.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ drawerItemStyle: styles.hiddenItem }}
      />
      <Drawer.Screen name="MyOrders" component={OrdersScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  )
}

const CustomDrawerContent = ({ navigation, state }: DrawerContentComponentProps) => {
  const { logout, user } = useAuth()

  if (!user) {
    return null;
  }

  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.drawerContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.accountCard}>
        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={22} color={COLORS.ink} />
        </View>
        <View style={styles.accountText}>
          <CustomText numberOfLines={1} style={styles.accountName}>
            {user.name}
          </CustomText>
          <CustomText numberOfLines={1} style={styles.accountEmail}>
            {user.email}
          </CustomText>
        </View>
      </View>

      <View style={styles.links}>
        {drawerItems.map((item) => {
          const focused = state.routeNames[state.index] === item.route

          return (
            <Pressable
              key={item.route}
              style={[styles.drawerItem, focused && styles.drawerItemActive]}
              onPress={() => navigation.navigate(item.route)}
            >
              <Ionicons
                name={item.icon}
                size={19}
                color={focused ? COLORS.peach : COLORS.clay}
              />
              <CustomText style={[styles.drawerLabel, focused && styles.drawerLabelActive]}>
                {item.label}
              </CustomText>
            </Pressable>
          )
        })}
      </View>

      <Pressable style={styles.logoutButton} onPress={logout}>
        <Ionicons name="log-out-outline" size={19} color={COLORS.peach} />
        <CustomText style={styles.logoutText}>Logout</CustomText>
      </Pressable>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  scene: {
  },
  drawer: {
    width: 292,
  },
  hiddenItem: {
    display: 'none',
  },
  drawerContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 24,
  },
  accountCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderRadius: 26,
    backgroundColor: COLORS.wine,
    padding: 16,
  },
  avatar: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: COLORS.orange,
  },
  accountText: {
    flex: 1,
    gap: 4,
  },
  accountName: {
    color: COLORS.peach,
    fontFamily: FONTS.semiBold,
    fontSize: 17,
  },
  accountEmail: {
    color: COLORS.peach,
    fontFamily: FONTS.regular,
    fontSize: 12,
    opacity: 0.72,
  },
  links: {
    gap: 10,
    marginTop: 24,
  },
  drawerItem: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 22,
    paddingHorizontal: 14,
  },
  drawerItemActive: {
    backgroundColor: COLORS.wine,
  },
  drawerLabel: {
    color: COLORS.clay,
    fontFamily: FONTS.medium,
    fontSize: 15,
  },
  drawerLabelActive: {
    color: COLORS.peach,
  },
  logoutButton: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 'auto',
    borderRadius: 27,
    backgroundColor: COLORS.clay,
  },
  logoutText: {
    color: COLORS.peach,
    fontFamily: FONTS.semiBold,
    fontSize: 15,
  },
})
