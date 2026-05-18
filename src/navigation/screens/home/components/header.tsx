import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from 'react-native'
import { COLORS } from '../../../../constants/theme';
import { CustomText } from "../../../../components/text";

const HomeHeader = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.locationRow}>
          <Ionicons name="location" size={13} color={COLORS.peach} />
          <CustomText style={styles.eyebrow}>Location</CustomText>
        </View>
        <CustomText style={styles.location}>AI Safa Street, AI Wasi</CustomText>
      </View>
      <Pressable style={styles.bagButton} onPress={() => navigation.navigate("Cart")}>
        <Ionicons name="bag" size={18} color={COLORS.ink} />
        <View style={styles.badge}>
          <CustomText style={styles.badgeText}>2</CustomText>
        </View>
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
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  eyebrow: {
    color: COLORS.peach,
    fontSize: 12,
    opacity: 0.75,
  },
  location: {
    marginTop: 5,
    color: COLORS.ink,
    fontSize: 14,
    fontWeight: "700",
  },
  bagButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  badge: {
    position: "absolute",
    top: -3,
    right: -2,
    width: 17,
    height: 17,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.orange,
  },
  badgeText: {
    color: COLORS.ink,
    fontSize: 10,
    fontWeight: "900",
  },
})