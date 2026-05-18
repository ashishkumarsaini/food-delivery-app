import { Image, Pressable, StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dish } from '../../../types/dish';
import { COLORS } from '../../../constants/theme';
import { CustomText } from '../../text';

const DetailedDishTile: FC<{
  dish: Dish;
  onClick: (restraurentId: string, dishId: string) => void;
  restraurentName: string;
  restraurentId: string;
}> = ({ dish, onClick, restraurentName, restraurentId }) => {
  const { name, price, image, deliveryTime, type, available } = dish;
  return (
    <Pressable
      key={dish.id}
      style={styles.foodCard}
      onPress={() => onClick(restraurentId, dish.id)}
    >
      <View style={styles.imageWrap}>
        <Image source={{ uri: image }} style={styles.foodImage} />
        <View style={styles.imageShade} />
        <View style={styles.ratingChip}>
          <Ionicons name="star" size={12} color="#FFD53D" />
          <CustomText style={styles.ratingText}>4.8</CustomText>
        </View>
      </View>

      <View style={styles.foodContent}>
        <View style={styles.titleRow}>
          <View style={{ flex: 1 }}>
            <CustomText numberOfLines={1} style={styles.foodName}>{name}</CustomText>
            <CustomText numberOfLines={1} style={styles.restraurentName}>{restraurentName}</CustomText>
          </View>
          <CustomText style={styles.price}>${price.toFixed(0)}</CustomText>
        </View>
      </View>
    </Pressable>
  );
};

export default DetailedDishTile;

const styles = StyleSheet.create({
  foodCard: {
    width: 254,
    marginRight: 16,
    overflow: "hidden",
  },
  imageWrap: {
    height: 148,
  },
  foodImage: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imageShade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 58,
  },
  ratingChip: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 6,
    backgroundColor: "rgba(31, 23, 21, 0.78)",
  },
  ratingText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  foodContent: {
    padding: 14,
    gap: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  foodName: {
    color: COLORS.ink,
    fontSize: 17,
    fontWeight: "500",
  },
  restraurentName: {
    marginTop: 4,
    color: COLORS.clay,
    fontSize: 12,
  },
  price: {
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: "500",
  },
  metaRow: {
    flexDirection: "row",
    gap: 8,
  },
  metaPill: {
    minHeight: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 999,
    paddingHorizontal: 10,
    backgroundColor: COLORS.peach,
  },
  vegPill: {
    backgroundColor: "#EAF7EE",
  },
  nonVegPill: {
    backgroundColor: "#FFF0EA",
  },
  typeDot: {
    width: 7,
    height: 7,
    borderRadius: 999,
  },
  vegDot: {
    backgroundColor: "#2F7D4E",
  },
  nonVegDot: {
    backgroundColor: COLORS.orange,
  },
  metaText: {
    color: COLORS.clay,
    fontSize: 11,
    fontWeight: "800",
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  availability: {
    color: "#2F7D4E",
    fontSize: 12,
    fontWeight: "900",
  },
  unavailable: {
    color: COLORS.clay,
  },
  arrowButton: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.orange,
  },
  arrowDisabled: {
    backgroundColor: COLORS.peach,
  },
})
