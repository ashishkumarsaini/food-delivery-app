import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from 'react-native'
import { COLORS } from '../../../../constants/theme';
import { CustomText } from "../../../../components/text";
import { useCart } from '../../../../providers/cart-provider';

const HomeHeader = () => {
  const navigation = useNavigation<any>();
  const { itemCount } = useCart();

  return (
    <View style={styles.header}>
      <View style={styles.copy}>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={25} color={COLORS.orange} />
          <CustomText numberOfLines={1} style={styles.location}>Chandigarh, India</CustomText>
          <Ionicons name="chevron-down" size={14} color={COLORS.clay} />
        </View>
      </View>

      <Pressable style={styles.bagButton} onPress={() => navigation.navigate("Cart")}>
        <Ionicons name="bag-handle-outline" size={21} color={COLORS.ink} />
        {itemCount > 0 && (
          <View style={styles.badge}>
            <CustomText style={styles.badgeText}>{itemCount}</CustomText>
          </View>
        )}
      </Pressable>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
  },
  copy: {
    flex: 1,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 4,
  },
  location: {
    flexShrink: 1,
    color: COLORS.ink,
    fontSize: 19,
  },
  bagButton: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.peach,
  },
  badge: {
    position: "absolute",
    top: 2,
    right: 1,
    width: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.orange,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 10,
  },
})
