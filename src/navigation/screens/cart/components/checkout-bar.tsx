import { Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "../../../../components/text";
import { COLORS, FONTS } from "../../../../constants/theme";

export function CheckoutBar({
  bottomInset,
  onCheckout,
  total,
}: {
  bottomInset: number;
  onCheckout: () => void;
  total: number;
}) {
  return (
    <View style={[styles.checkoutShell, { paddingBottom: bottomInset + 14 }]}>
      <View>
        <CustomText style={styles.checkoutLabel}>Total amount</CustomText>
        <CustomText style={styles.checkoutPrice}>${total.toFixed(2)}</CustomText>
      </View>
      <Pressable style={styles.checkoutButton} onPress={onCheckout}>
        <CustomText style={styles.checkoutText}>Checkout</CustomText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  checkoutShell: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 14,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 248, 244, 0.96)",
  },
  checkoutLabel: {
    color: COLORS.clay,
    fontSize: 12,
  },
  checkoutPrice: {
    marginTop: 2,
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  checkoutButton: {
    minWidth: 142,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.ink,
  },
  checkoutText: {
    color: "#FFFFFF",
    fontFamily: FONTS.semiBold,
    fontSize: 15,
  },
});
