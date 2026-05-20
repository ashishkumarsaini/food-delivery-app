import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, View } from 'react-native'
import { ScreenWrapper } from '../../../components/Screen'
import { CustomText } from '../../../components/text'
import { COLORS, FONTS } from '../../../constants/theme'
import { SettingRow } from './components/settings-row'

export const SettingsScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CustomText style={styles.eyebrow}>Settings</CustomText>
        <CustomText style={styles.title}>App preferences</CustomText>

        <View style={styles.card}>
          <SettingRow icon="notifications-outline" label="Notifications" value="On" />
          <SettingRow icon="location-outline" label="Delivery location" value="Chandigarh" />
          <SettingRow icon="card-outline" label="Payment method" value="Cash" />
        </View>
      </View>
    </ScreenWrapper>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.peach,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  eyebrow: {
    color: COLORS.clay,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  title: {
    marginTop: 6,
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 32,
  },
  card: {
    gap: 10,
    marginTop: 24,
  }
})
