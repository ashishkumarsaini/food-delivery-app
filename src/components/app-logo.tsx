import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { COLORS } from '../constants/theme'

export const AppLogo = () => {
  return (
    <View style={styles.heroMark}>
      <Ionicons name="restaurant" size={30} color={COLORS.orange} />
    </View>
  )
}


const styles = StyleSheet.create({
  heroMark: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 14px 30px rgba(45, 8, 10, 0.08)",
  },
})