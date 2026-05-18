import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RESTRAURENTS } from "../../../constants/restraurents";
import { CartHeader } from "./components/cart-header";
import { CartItemRow } from "./components/cart-item-row";
import { CartSummary } from "./components/cart-summary";
import { CheckoutBar } from "./components/checkout-bar";
import { VoucherCard } from "./components/voucher-card";
import { COLORS } from "../../../constants/theme";

const cartItems = RESTRAURENTS.map((restraurent, index) => ({
  restraurent,
  dish: restraurent.dishes[index % restraurent.dishes.length],
  quantity: index + 1,
}));

const subtotal = cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
const deliveryFee = 2;
const total = subtotal + deliveryFee;

export function CartScreen() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 18,
          paddingBottom: insets.bottom + 150,
        }}
      >
        <CartHeader onBack={() => navigation.goBack()} />
        <View style={styles.items}>
          {cartItems.map(({ restraurent, dish, quantity }) => (
            <CartItemRow
              key={dish.id}
              dish={dish}
              quantity={quantity}
              restraurent={restraurent}
            />
          ))}
        </View>

        <VoucherCard />
        <CartSummary subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
      </ScrollView>

      <CheckoutBar total={total} bottomInset={insets.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.peach,
  },
  items: {
    gap: 12,
    marginTop: 24,
  },
});
