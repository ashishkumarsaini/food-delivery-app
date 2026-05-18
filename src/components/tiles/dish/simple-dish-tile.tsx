import { Image, Pressable, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import { Dish } from '../../../types/dish';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../../../constants/theme';
import { CustomText } from '../../text';

const SimpleDishTile: FC<{
  dish: Dish, restraurentId: string,
  onClick: (restraurentId: string, dishId: string) => void,
  onAddToCart: (restraurentId: string, dishId: string) => void
}> = ({ dish, restraurentId, onClick, onAddToCart }) => {
  return (
    <Pressable onPress={() => onClick(restraurentId, dish.id)}>
      <Pressable onPress={() => onAddToCart(restraurentId, dish.id)}>
        <MaterialIcons name="add-circle" size={24} color={COLORS.wine} style={styles.addButton} />
      </Pressable>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View>
        <CustomText style={styles.name}>{dish.name}</CustomText>
        <CustomText style={styles.price}>Rs. {dish.price}.00</CustomText>
      </View>
    </Pressable>
  )
}

export default SimpleDishTile

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  addButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 100,
    backgroundColor: COLORS.peach,
    borderRadius: 999,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    fontSize: 14,
    fontWeight: "600",
  }
})