import { Image, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Restraurent } from '../../types/restraurent'
import { COLORS } from '../../constants/theme'

export const RestraurentTile: FC<{ restraurent: Restraurent }> = ({ restraurent }) => {
  const { name, image, location } = restraurent
  return (
    <View>
      <Image src={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
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
    marginTop: 10,
    fontSize: 15
  },
  location: {
    marginTop: 2,
    fontSize: 13,
  }
})