import { COLORS } from '../constants/theme'
import React, { FC, ReactNode } from 'react'
import { Pressable, StyleSheet, ViewStyle } from 'react-native'

export const Button: FC<{ children: ReactNode, onPress: () => void, buttonStyles?: ViewStyle }> = ({ children, onPress, buttonStyles }) => {
  return (
    <Pressable
      style={({ pressed }) => StyleSheet.flatten([styles.button, pressed && styles.buttonPresses, buttonStyles])}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    minHeight: 62,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.ink,
    boxShadow: "0 10px 24px rgba(31, 23, 21, 0.18)",
    transform: [{ scale: 1 }],
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
  },
  buttonPresses: {
    transform: [{ scale: 0.99 }]
  }
})
