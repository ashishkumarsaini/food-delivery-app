import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import { CustomText } from '../../../../components/text';
import { COLORS, FONTS } from '../../../../constants/theme';

export const HelpRow = ({
  icon,
  title,
  text,
}: {
  icon: keyof typeof Ionicons.glyphMap
  title: string
  text: string
}) => (
  <View style={styles.row}>
    <View style={styles.iconWrap}>
      <Ionicons name={icon} size={18} color={COLORS.orange} />
    </View>
    <View style={styles.rowText}>
      <CustomText style={styles.rowTitle}>{title}</CustomText>
      <CustomText style={styles.rowCopy}>{text}</CustomText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 22,
    backgroundColor: '#FFF7F2',
    padding: 14,
  },
  iconWrap: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    backgroundColor: COLORS.peach,
  },
  rowText: {
    flex: 1,
    gap: 3,
  },
  rowTitle: {
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 15,
  },
  rowCopy: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
})    