import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dish } from '../../../types/dish';
import { COLORS } from '../../../constants/theme';

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
          <Text style={styles.ratingText}>4.8</Text>
        </View>
        <Pressable style={styles.favoriteButton}>
          <Ionicons name="heart-outline" size={18} color={COLORS.ink} />
        </Pressable>
      </View>

      <View style={styles.foodContent}>
        <View style={styles.titleRow}>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.foodName}>{name}</Text>
            <Text numberOfLines={1} style={styles.restraurentName}>{restraurentName}</Text>
          </View>
          <Text style={styles.price}>${price.toFixed(0)}</Text>
        </View>

        <View style={styles.metaRow}>
          <View style={styles.metaPill}>
            <Ionicons name="time-outline" size={13} color={COLORS.clay} />
            <Text style={styles.metaText}>{deliveryTime}</Text>
          </View>
          <View style={[styles.metaPill, type === "veg" ? styles.vegPill : styles.nonVegPill]}>
            <View style={[styles.typeDot, type === "veg" ? styles.vegDot : styles.nonVegDot]} />
            <Text style={styles.metaText}>{type === "veg" ? "Veg" : "Non-veg"}</Text>
          </View>
        </View>

        <View style={styles.footerRow}>
          <Text style={[styles.availability, !available && styles.unavailable]}>
            {available ? "Available now" : "Currently sold out"}
          </Text>
          <View style={[styles.arrowButton, !available && styles.arrowDisabled]}>
            <Ionicons name="arrow-forward" size={17} color={available ? "#FFFFFF" : COLORS.clay} />
          </View>
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
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    boxShadow: "0 12px 28px rgba(31, 23, 21, 0.14)",
  },
  imageWrap: {
    height: 148,
    backgroundColor: COLORS.peach,
  },
  foodImage: {
    width: "100%",
    height: "100%",
  },
  imageShade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 58,
    backgroundColor: "rgba(31, 23, 21, 0.2)",
  },
  ratingChip: {
    position: "absolute",
    top: 10,
    left: 10,
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
  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
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
    fontWeight: "900",
  },
  restraurentName: {
    marginTop: 4,
    color: COLORS.clay,
    fontSize: 12,
  },
  price: {
    minWidth: 52,
    overflow: "hidden",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    backgroundColor: "#FFD53D",
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
