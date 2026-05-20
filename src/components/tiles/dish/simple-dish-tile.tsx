import { Image, Pressable, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Dish } from '../../../types/dish';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../../constants/theme';
import { CustomText } from '../../text';

const SimpleDishTile: FC<{
  dish: Dish, restraurentId: string,
  onClick: (restraurentId: string, dishId: string) => void,
  onAddToCart: (restraurentId: string, dishId: string) => void,
  isRestraurentOpen: boolean;
}> = ({ dish, restraurentId, onClick, onAddToCart, isRestraurentOpen }) => {
  return (
    <Pressable style={styles.container} onPress={() => onClick(restraurentId, dish.id)}>
      <Pressable disabled={!dish.available || !isRestraurentOpen} style={[styles.addButton, (!dish.available || !isRestraurentOpen) && styles.iconDisabled]} onPress={() => onAddToCart(restraurentId, dish.id)}>
        <MaterialIcons name="add-circle" size={24} color={COLORS.wine} />
      </Pressable>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.content}>
        <CustomText style={styles.name}>{dish.name}</CustomText>
        <CustomText style={styles.price}>Rs. {dish.price}.00</CustomText>
      </View>
    </Pressable>
  )
}

export default SimpleDishTile

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  addButton: {
    position: 'absolute',
    zIndex: 99,
    right: 5,
    top: 5,
    backgroundColor: COLORS.peach,
    borderRadius: 999,
  },
  content: {
    paddingVertical: 14,
    gap: 4,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 14,
  },
  iconDisabled: {
    opacity: 0.5,
  },
})