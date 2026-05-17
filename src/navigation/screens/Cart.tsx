import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RESTRAURENTS } from "../../constants/restraurents";
import { COLORS } from "../../constants/theme";

const cartItems = RESTRAURENTS.map((restraurent, index) => ({
  restraurent,
  dish: restraurent.dishes[index % restraurent.dishes.length],
  quantity: index + 1,
  rating: `4.${index + 7}`,
}));

const subtotal = cartItems.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
const deliveryFee = 2;
const total = subtotal + deliveryFee;

export default function CartScreen() {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 18,
          paddingBottom: insets.bottom + 42,
        }}
      >
        <View style={styles.header}>
          <Pressable style={styles.headerButton} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
          </Pressable>
          <Text style={styles.headerTitle}>Cart</Text>
          <Pressable style={styles.headerButton}>
            <Ionicons name="ellipsis-vertical" size={18} color="#FFFFFF" />
          </Pressable>
        </View>

        <View style={styles.items}>
          {cartItems.map(({ restraurent, dish, quantity, rating }) => (
            <View key={dish.id} style={styles.cartItem}>
              <Image source={{ uri: dish.image }} style={styles.itemImage} />
              <View style={{ flex: 1 }}>
                <View style={styles.itemTitleRow}>
                  <Text style={styles.itemTitle}>{dish.name}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFD53D" />
                    <Text style={styles.ratingText}>{rating}</Text>
                  </View>
                </View>
                <Text style={styles.itemSource}>By {restraurent.name}</Text>
                <View style={styles.itemBottomRow}>
                  <Text style={styles.itemPrice}>${dish.price.toFixed(2)}</Text>
                  <View style={styles.stepper}>
                    <Pressable style={styles.stepButton}>
                      <Ionicons name="remove" size={13} color="#FFFFFF" />
                    </Pressable>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <Pressable style={styles.stepButtonLight}>
                      <Ionicons name="add" size={13} color={COLORS.ink} />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.summaryCard}>
          <View style={styles.voucherBox}>
            <Ionicons name="ticket" size={17} color="#FFFFFF" />
            <Text style={styles.voucherText}>Enter your voucher code</Text>
          </View>

          <SummaryRow label="Subtotal:" value={`$${subtotal.toFixed(2)}`} />
          <SummaryRow label="Delivery Fee:" value={`$${deliveryFee.toFixed(2)}`} />
          <View style={styles.divider} />
          <SummaryRow label="Total Amount:" value={`$${total.toFixed(2)}`} strong />

          <View style={styles.checkoutBar}>
            <Text style={styles.checkoutPrice}>${total.toFixed(2)}</Text>
            <Pressable style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SummaryRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <View style={styles.summaryRow}>
      <Text style={[styles.summaryLabel, strong && styles.summaryStrong]}>{label}</Text>
      <Text style={[styles.summaryValue, strong && styles.summaryStrong]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: COLORS.ink,
  },
  header: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.wine,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },
  items: {
    gap: 18,
    marginTop: 20,
  },
  cartItem: {
    flexDirection: "row",
    gap: 14,
  },
  itemImage: {
    width: 94,
    height: 74,
    borderRadius: 14,
  },
  itemTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  itemTitle: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "900",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  itemSource: {
    marginTop: 3,
    color: COLORS.peach,
    fontSize: 12,
  },
  itemBottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  itemPrice: {
    color: "#FFD53D",
    fontSize: 13,
    fontWeight: "900",
  },
  stepper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  stepButton: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.wine,
  },
  stepButtonLight: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  quantity: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },
  summaryCard: {
    marginTop: 22,
    borderRadius: 26,
    padding: 16,
    backgroundColor: "#241C1D",
  },
  voucherBox: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderRadius: 999,
    paddingHorizontal: 16,
    marginBottom: 18,
    backgroundColor: COLORS.wine,
  },
  voucherText: {
    color: COLORS.peach,
    fontSize: 12,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  summaryLabel: {
    color: COLORS.peach,
    fontSize: 13,
  },
  summaryValue: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  summaryStrong: {
    color: "#FFFFFF",
    fontWeight: "900",
  },
  divider: {
    height: 1,
    marginTop: 14,
    borderRadius: 999,
    backgroundColor: COLORS.clay,
    opacity: 0.45,
  },
  checkoutBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    borderRadius: 999,
    paddingLeft: 18,
    paddingRight: 6,
    backgroundColor: COLORS.ink,
  },
  checkoutPrice: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "900",
  },
  checkoutButton: {
    minWidth: 128,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFD53D",
  },
  checkoutText: {
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: "900",
  },
});
