import { StyleSheet, View } from "react-native";
import { CustomText } from "../../../../components/text";
import { COLORS, FONTS } from "../../../../constants/theme";

export function CartSummary({
  subtotal,
  deliveryFee,
  total,
}: {
  subtotal: number;
  deliveryFee: number;
  total: number;
}) {
  return (
    <View style={styles.summaryCard}>
      <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
      <SummaryRow label="Delivery" value={`$${deliveryFee.toFixed(2)}`} />
      <View style={styles.divider} />
      <SummaryRow label="Total" value={`$${total.toFixed(2)}`} strong />
    </View>
  );
}

function SummaryRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <View style={styles.summaryRow}>
      <CustomText style={[styles.summaryLabel, strong && styles.summaryStrong]}>{label}</CustomText>
      <CustomText style={[styles.summaryValue, strong && styles.summaryStrong]}>{value}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryCard: {
    gap: 13,
    marginTop: 14,
    borderRadius: 10,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  summaryLabel: {
    color: COLORS.clay,
    fontSize: 14,
  },
  summaryValue: {
    color: COLORS.ink,
    fontSize: 14,
  },
  summaryStrong: {
    fontFamily: FONTS.semiBold,
    color: COLORS.ink,
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#F3E2DA",
  },
});
