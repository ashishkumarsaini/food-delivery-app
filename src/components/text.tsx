import { StyleSheet, Text, View, TextProps } from 'react-native'
import React from 'react'

export const CustomText = ({ style, children, ...props }: TextProps) => {
  return (
    <Text {...props} style={StyleSheet.compose(defaultStyle, style)}>{children}</Text>
  )
}

const defaultStyle = StyleSheet.create({})