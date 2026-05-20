import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScreenWrapper } from '../../../components/Screen'
import { CustomText } from '../../../components/text'
import { COLORS, FONTS } from '../../../constants/theme'
import { HelpRow } from './components/help-items'

export const HelpScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CustomText style={styles.eyebrow}>Help</CustomText>
        <CustomText style={styles.title}>How can we help?</CustomText>

        <View style={styles.card}>
          <HelpRow icon="receipt-outline" title="Order support" text="Track, change, or report an issue." />
          <HelpRow icon="chatbubble-ellipses-outline" title="Chat with us" text="We usually reply in a few minutes." />
          <HelpRow icon="information-circle-outline" title="About delivery" text="Fees, timing, and restaurant updates." />
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
});