import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RESTRAURENTS } from "../../../constants/restraurents";
import { CartHeader } from "./components/cart-header";
import { CartItemRow } from "./components/cart-item-row";
import { CartSummary } from "./components/cart-summary";
import { CheckoutBar } from "./components/checkout-bar";
import { VoucherCard } from "./components/voucher-card";
import { COLORS, FONTS } from "../../../constants/theme";
import { useCart } from "../../../providers/cart-provider";
import { CustomText } from "../../../components/text";
import { useOrders } from "../../../providers/orders-provider";

export function CartScreen() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const {
    clearCart,
    itemCount,
    items,
    subtotal,
    updateQuantity,
    removeFromCart,
  } = useCart();
  const { addOrder } = useOrders();
  const deliveryFee = items.length ? 40 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    if (!items.length) {
      return;
    }

    addOrder({
      items,
      subtotal,
      deliveryFee,
      total,
    });
    clearCart();
    navigation.navigate("Home", { screen: "MyOrders" });
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 18,
          paddingBottom: insets.bottom + 150,
        }}
        ListHeaderComponent={
          <>
            <CartHeader
              itemCount={itemCount}
              onBack={() => navigation.goBack()}
              onClear={clearCart}
            />
            <View style={styles.heroCard}>
              <View style={styles.heroIcon}>
                <Ionicons name="basket-outline" size={22} color={COLORS.orange} />
              </View>
              <View style={styles.heroCopy}>
                <CustomText style={styles.heroTitle}>Your food basket</CustomText>
                <CustomText style={styles.heroText}>
                  Review your dishes before checkout.
                </CustomText>
              </View>
            </View>
          </>
        }
        renderItem={({ item }) => {
          const restraurent = RESTRAURENTS.find((place) => place.id === item.restraurentId);

          if (!restraurent) {
            return null;
          }

          return (
            <CartItemRow
              dish={item.dish}
              onDecrement={() => updateQuantity(item.id, item.quantity - 1)}
              onIncrement={() => updateQuantity(item.id, item.quantity + 1)}
              onRemove={() => removeFromCart(item.id)}
              quantity={item.quantity}
              restraurent={restraurent}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={
          <View style={styles.emptyCard}>
            <Ionicons name="fast-food-outline" size={30} color={COLORS.orange} />
            <CustomText style={styles.emptyTitle}>Your cart is empty</CustomText>
            <CustomText style={styles.emptyText}>
              Add dishes from restaurants and they will appear here.
            </CustomText>
          </View>
        }
        ListFooterComponent={
          items.length ? (
            <>
              <VoucherCard />
              <CartSummary subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
            </>
          ) : null
        }
      />

      {items.length ? (
        <CheckoutBar
          total={total}
          bottomInset={insets.bottom}
          onCheckout={handleCheckout}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.peach,
  },
  heroCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginTop: 22,
    marginBottom: 18,
    borderRadius: 28,
    backgroundColor: COLORS.wine,
    padding: 16,
  },
  heroIcon: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: COLORS.peach,
  },
  heroCopy: {
    flex: 1,
    gap: 4,
  },
  heroTitle: {
    color: COLORS.peach,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  heroText: {
    color: COLORS.peach,
    fontFamily: FONTS.regular,
    fontSize: 13,
    opacity: 0.72,
  },
  separator: {
    height: 12,
  },
  emptyCard: {
    alignItems: "center",
    gap: 8,
    marginTop: 42,
    borderRadius: 28,
    backgroundColor: "#FFF7F2",
    padding: 26,
  },
  emptyTitle: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 19,
  },
  emptyText: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 14,
    textAlign: "center",
  },
});
