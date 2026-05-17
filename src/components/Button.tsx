import { COLORS } from '../constants/theme'
import React, { FC } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export const Button: FC<{ label: string, onPress: () => void }> = ({ label, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => StyleSheet.compose(styles.button, pressed && styles.buttonPresses)}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 17,
          fontWeight: "800"
        }}
      >
        {label}
      </Text>
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
  },
  buttonPresses: {
    transform: [{ scale: 0.99 }]
  }
})
