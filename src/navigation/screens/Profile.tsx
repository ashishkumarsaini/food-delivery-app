import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { ScreenWrapper } from '../../components/Screen'
import { CustomText } from '../../components/text'
import { COLORS, FONTS } from '../../constants/theme'
import { useAuth } from '../../providers/auth-provider'

const ProfileScreen = () => {
  const { logout, user } = useAuth()
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
          <CustomText style={styles.eyebrow}>Profile</CustomText>
          <CustomText style={styles.title}>Your account</CustomText>
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

        <Pressable style={styles.logoutButton} onPress={logout}>
          <Ionicons name="log-out-outline" size={18} color={COLORS.peach} />
          <CustomText style={styles.logoutText}>Logout</CustomText>
        </Pressable>
      </View>
    </ScreenWrapper>
  )
}

export default ProfileScreen

const ProfileRow = ({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
}) => (
  <View style={styles.row}>
    <View style={styles.rowIcon}>
      <Ionicons name={icon} size={18} color={COLORS.orange} />
    </View>
    <View style={styles.rowContent}>
      <CustomText style={styles.rowLabel}>{label}</CustomText>
      <CustomText numberOfLines={1} style={styles.rowValue}>{value}</CustomText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.peach,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 108,
  },
  header: {
    gap: 6,
    marginBottom: 28,
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
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderRadius: 22,
    backgroundColor: COLORS.wine,
    padding: 14,
  },
  rowIcon: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    backgroundColor: COLORS.clay,
  },
  rowContent: {
    flex: 1,
    gap: 2,
  },
  rowLabel: {
    color: COLORS.peach,
    fontFamily: FONTS.regular,
    fontSize: 12,
    opacity: 0.62,
  },
  rowValue: {
    color: COLORS.peach,
    fontFamily: FONTS.medium,
    fontSize: 16,
  },
  logoutButton: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 18,
    borderRadius: 28,
    backgroundColor: COLORS.clay,
  },
  logoutText: {
    color: COLORS.peach,
    fontFamily: FONTS.semiBold,
    fontSize: 16,
  },
})
