import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "../../../../components/text";
import { COLORS, FONTS } from "../../../../constants/theme";
import { Dish } from "../../../../types/dish";
import { Restraurent } from "../../../../types/restraurent";

export function CartItemRow({
  dish,
  onDecrement,
  onIncrement,
  onRemove,
  quantity,
  restraurent,
}: {
  dish: Dish;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
  quantity: number;
  restraurent: Restraurent;
}) {
  const itemTotal = dish.price * quantity;

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: dish.image }} style={styles.itemImage} />

      <View style={styles.itemBody}>
        <View style={styles.itemTop}>
          <View style={{ flex: 1 }}>
            <CustomText style={styles.itemTitle}>{dish.name}</CustomText>
            <CustomText style={styles.itemSource}>{restraurent.name}</CustomText>
          </View>
          <Pressable style={styles.removeButton} onPress={onRemove}>
            <Ionicons name="close" size={14} color={COLORS.clay} />
          </Pressable>
        </View>

        <View style={styles.itemMetaRow}>
          <View style={styles.metaPill}>
            <Ionicons name="time-outline" size={13} color={COLORS.clay} />
            <CustomText style={styles.metaText}>{dish.deliveryTime}</CustomText>
          </View>
          <CustomText style={styles.itemPrice}>Rs. {itemTotal.toFixed(0)}</CustomText>
        </View>

        <View style={styles.footerRow}>
          <CustomText style={styles.unitPrice}>Rs. {dish.price.toFixed(0)} each</CustomText>
          <View style={styles.stepper}>
            <Pressable style={styles.stepButton} onPress={onDecrement}>
              <Ionicons name="remove" size={13} color={COLORS.ink} />
            </Pressable>
            <CustomText style={styles.quantity}>{quantity}</CustomText>
            <Pressable style={styles.stepButtonActive} onPress={onIncrement}>
              <Ionicons name="add" size={13} color={COLORS.ink} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    gap: 12,
    borderRadius: 24,
    padding: 12,
    backgroundColor: "#FFF7F2",
  },
  itemImage: {
    width: 92,
    height: 106,
    borderRadius: 18,
    backgroundColor: COLORS.peach,
  },
  itemBody: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  itemTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  itemTitle: {
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 17,
  },
  itemSource: {
    marginTop: 4,
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
  itemPrice: {
    color: COLORS.orange,
    fontFamily: FONTS.semiBold,
    fontSize: 15,
  },
  removeButton: {
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: COLORS.peach,
  },
  itemMetaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  metaPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 6,
    backgroundColor: COLORS.peach,
  },
  metaText: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  unitPrice: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
  },
  stepButton: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFF2EA",
  },
  stepButtonActive: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.orange,
  },
  quantity: {
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 13,
  },
});
