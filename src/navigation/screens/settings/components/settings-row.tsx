import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, View } from 'react-native'
import { CustomText } from '../../../../components/text'
import { COLORS, FONTS } from '../../../../constants/theme'

export const SettingRow = ({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
}) => (
  <View style={styles.row}>
    <View style={styles.iconWrap}>
      <Ionicons name={icon} size={18} color={COLORS.orange} />
    </View>
    <CustomText style={styles.label}>{label}</CustomText>
    <CustomText style={styles.value}>{value}</CustomText>
  </View>
)


const styles = StyleSheet.create({
  row: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 22,
    backgroundColor: COLORS.peach,
    paddingHorizontal: 14,
  },
  iconWrap: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#FFF7F2',
  },
  label: {
    flex: 1,
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 15,
  },
  value: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
})

