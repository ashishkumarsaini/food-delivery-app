import { StyleSheet, Text, TextProps } from 'react-native'
import React from 'react'
import { FONTS } from '../constants/theme'

export const CustomText = ({ style, children, ...props }: TextProps) => {
  return (
    <Text {...props} style={StyleSheet.compose(defaultStyle.text, style)}>{children}</Text>
  )
}

const defaultStyle = StyleSheet.create({
  text: {
    fontFamily: FONTS.medium,
  },
})
