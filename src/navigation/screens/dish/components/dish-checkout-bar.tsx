import { Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../../constants/theme";

export function DishCheckoutBar({
  price,
  bottomInset,
  onAddToCart,
}: {
  price: number;
  bottomInset: number;
  onAddToCart: () => void;
}) {
  return (
    <View style={[styles.container, { paddingBottom: bottomInset + 10 }]}>
      <View style={styles.bar}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <Pressable style={styles.button} onPress={onAddToCart}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 24,
    paddingTop: 10,
    backgroundColor: "rgba(255, 247, 239, 0.96)",
  },
  bar: {
    height: 54,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 7,
    backgroundColor: COLORS.orange,
  },
  price: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
