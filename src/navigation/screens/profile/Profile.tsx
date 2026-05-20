import Ionicons from '@expo/vector-icons/Ionicons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { ScreenWrapper } from '../../../components/Screen'
import { CustomText } from '../../../components/text'
import { COLORS, FONTS } from '../../../constants/theme'
import { useAuth } from '../../../providers/auth-provider'
import { ProfileRow } from './components/profile-row'

export const ProfileScreen = () => {
  const navigation = useNavigation()
  const { user } = useAuth()
  const name = user?.name ?? 'Guest User'
  const email = user?.email ?? 'guest@foodie.app'
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <CustomText style={styles.eyebrow}>Profile</CustomText>
            <CustomText style={styles.title}>Your account</CustomText>
          </View>
          <Pressable
            style={styles.drawerButton}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Ionicons name="menu-outline" size={22} color={COLORS.peach} />
          </Pressable>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <CustomText style={styles.avatarText}>{initials}</CustomText>
          </View>

          <View style={styles.profileInfo}>
            <CustomText numberOfLines={1} style={styles.name}>{name}</CustomText>
            <CustomText numberOfLines={1} style={styles.email}>{email}</CustomText>
          </View>
        </View>

        <View style={styles.section}>
          <ProfileRow icon="person-outline" label="Full name" value={name} />
          <ProfileRow icon="mail-outline" label="Email address" value={email} />
          <ProfileRow icon="location-outline" label="Delivery area" value="Chandigarh, India" />
        </View>

      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 108,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 14,
    marginBottom: 28,
  },
  drawerButton: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
    backgroundColor: COLORS.wine,
  },
  eyebrow: {
    color: COLORS.orange,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  title: {
    color: COLORS.wine,
    fontFamily: FONTS.semiBold,
    fontSize: 34,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 18,
    borderRadius: 28,
    backgroundColor: COLORS.wine,
    padding: 18,
  },
  avatar: {
    width: 72,
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: COLORS.orange,
  },
  avatarText: {
    color: COLORS.ink,
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  profileInfo: {
    flex: 1,
    gap: 5,
  },
  name: {
    color: COLORS.peach,
    fontFamily: FONTS.semiBold,
    fontSize: 22,
  },
  email: {
    color: COLORS.peach,
    fontFamily: FONTS.regular,
    fontSize: 14,
    opacity: 0.72,
  },
  section: {
    gap: 10,
    marginTop: 4,
  }
})
