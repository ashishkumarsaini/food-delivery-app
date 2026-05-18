import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import { COLORS } from "../../../../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { CustomText } from "../../../../components/text";

export function DishCheckoutBar({
  price,
  onAddToCart,
}: {
  price: number;
  onAddToCart: () => void;
}) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const tabBarWidth = 300;
  const tabBarLeft = (width - tabBarWidth) / 2;

  return (
    <View style={[styles.container, { bottom: insets.bottom + 18 }]}>
      <Pressable onPress={onAddToCart} style={[styles.bar, { width: tabBarWidth, transform: [{ translateX: tabBarLeft }] }]}>
        <CustomText style={styles.price}>Rs. {price.toFixed(2)}</CustomText>
        <View style={styles.icon}>
          <FontAwesome name="cart-plus" size={25} color={COLORS.ink} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute'
  },
  bar: {
    height: 65,
    borderRadius: 50,
    backgroundColor: COLORS.ink,
    overflow: 'hidden',
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  icon: {
    backgroundColor: COLORS.peach,
    borderRadius: 999,
    height: 55,
    width: 55,
    marginRight: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
