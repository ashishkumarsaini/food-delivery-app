import React, { FC } from 'react'
import { Dish } from '../../../types/dish'
import { useNavigation } from '@react-navigation/native';
import DetailedDishTile from './detailed-dish-tile';
import SimpleDishTile from './simple-dish-tile';
import { useCart } from '../../../providers/cart-provider';
import { RESTRAURENTS } from '../../../constants/restraurents';

export enum DISH_VARIANT { simple = 'simple', card = 'card' };

export const DishTile: FC<{ dish: Dish, restraurentId: string, restraurentName: string, variant?: DISH_VARIANT }> = ({
  dish,
  restraurentId,
  restraurentName,
  variant = "simple",
}) => {
  const navigation = useNavigation<any>();
  const { addToCart } = useCart();
  const restraurent = RESTRAURENTS.find((item) => item.id === restraurentId);
  const isRestraurentOpen = restraurent?.isOpen || false;

  const onClick = (restraurentId: string, dishId: string) => {
    navigation.navigate("Dish", { restraurentId, dishId });
  }
  const onAddToCart = (restraurentId: string, dishId: string) => {
    addToCart(restraurentId, dish);

    navigation.navigate("Cart", { restraurentId, dishId });
  }

  if (variant === DISH_VARIANT.card) {
    return (
      <DetailedDishTile restraurentName={restraurentName} onClick={onClick} dish={dish} restraurentId={restraurentId} />
    )
  }

  return (
    <SimpleDishTile dish={dish} onAddToCart={onAddToCart} onClick={onClick} restraurentId={restraurentId} isRestraurentOpen={isRestraurentOpen} />
  )
}

