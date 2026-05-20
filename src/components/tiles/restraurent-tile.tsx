import { Image, Pressable, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Restraurent } from '../../types/restraurent'
import { CustomText } from '../text'
import { useNavigation } from '@react-navigation/native'

export const RestraurentTile: FC<{ restraurent: Restraurent }> = ({ restraurent }) => {
  const navigation = useNavigation<any>();

  const navigateToRestraurent = (restraurentId: string) => {
    navigation.navigate("Restraurent", { restraurentId });
  }

  const { name, image, location } = restraurent
  return (
    <Pressable onPress={() => navigateToRestraurent(restraurent.id)}>
      <Image src={image} style={styles.image} />
      <View style={styles.container}>
        <CustomText style={styles.name}>{name}</CustomText>
        <CustomText style={styles.location}>{location}</CustomText>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
  },
  container: {
    paddingVertical: 15,
  },
  name: {
    fontSize: 16,
  },
  location: {
    fontSize: 14,
  }
})