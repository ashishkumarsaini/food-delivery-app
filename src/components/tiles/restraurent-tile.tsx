import { Image, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Restraurent } from '../../types/restraurent'
import { CustomText } from '../text'

export const RestraurentTile: FC<{ restraurent: Restraurent }> = ({ restraurent }) => {
  const { name, image, location } = restraurent
  return (
    <View>
      <Image src={image} style={styles.image} />
      <CustomText style={styles.name}>{name}</CustomText>
      <CustomText style={styles.location}>{location}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "500"
  },
  location: {
    fontSize: 14,
    fontWeight: "600",
  }
})