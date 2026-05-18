import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { CustomText } from "../../../../components/text";
import { COLORS } from "../../../../constants/theme";

export function VoucherCard() {
  return (
    <View style={styles.voucherCard}>
      <View style={styles.voucherIcon}>
        <Ionicons name="ticket-outline" size={18} color={COLORS.orange} />
      </View>
      <CustomText style={styles.voucherText}>Add voucher code</CustomText>
      <Ionicons name="chevron-forward" size={18} color={COLORS.clay} />
    </View>
  );
}

const styles = StyleSheet.create({
  voucherCard: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 18,
    borderRadius: 10,
    paddingHorizontal: 14,
    backgroundColor: "#FFFFFF",
  },
  voucherIcon: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFF2EA",
  },
  voucherText: {
    flex: 1,
    color: COLORS.ink,
    fontSize: 14,
  },
});
