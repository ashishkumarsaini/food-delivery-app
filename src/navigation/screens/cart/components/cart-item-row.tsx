import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "../../../../components/text";
import { COLORS, FONTS } from "../../../../constants/theme";
import { Dish } from "../../../../types/dish";
import { Restraurent } from "../../../../types/restraurent";

export function CartItemRow({
  dish,
  quantity,
  restraurent,
}: {
  dish: Dish;
  quantity: number;
  restraurent: Restraurent;
}) {
  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: dish.image }} style={styles.itemImage} />

      <View style={styles.itemBody}>
        <View style={styles.itemTop}>
          <View style={{ flex: 1 }}>
            <CustomText style={styles.itemTitle}>{dish.name}</CustomText>
            <CustomText style={styles.itemSource}>{restraurent.name}</CustomText>
          </View>
          <CustomText style={styles.itemPrice}>${dish.price.toFixed(2)}</CustomText>
        </View>

        <View style={styles.itemMetaRow}>
          <View style={styles.metaPill}>
            <Ionicons name="time-outline" size={13} color={COLORS.clay} />
            <CustomText style={styles.metaText}>{dish.deliveryTime}</CustomText>
          </View>

          <View style={styles.stepper}>
            <Pressable style={styles.stepButton}>
              <Ionicons name="remove" size={13} color={COLORS.ink} />
            </Pressable>
            <CustomText style={styles.quantity}>{quantity}</CustomText>
            <Pressable style={styles.stepButtonActive}>
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
    gap: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  itemImage: {
    width: 82,
    height: 82,
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
    fontSize: 18,
  },
  itemSource: {
    marginTop: 10,
    color: COLORS.wine,
    fontSize: 14,
  },
  itemPrice: {
    color: COLORS.orange,
    fontSize: 16,
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
    fontSize: 14,
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
    fontSize: 13,
  },
});
