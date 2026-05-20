import Ionicons from "@expo/vector-icons/Ionicons"
import { StyleSheet, View } from "react-native"
import { CustomText } from "../../../../components/text"
import { COLORS, FONTS } from "../../../../constants/theme"

export const ProfileRow = ({
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
);

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
});
