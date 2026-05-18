import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../../../../constants/theme";
import { CustomText } from "../../../../components/text";

export function InfoPill({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }) {
  return (
    <View style={styles.infoPill}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={17} color={COLORS.orange} />
      </View>
      <View style={{ flex: 1 }}>
        <CustomText style={styles.infoLabel}>{label}</CustomText>
        <CustomText numberOfLines={1} style={styles.infoValue}>{value}</CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoPill: {
    width: "48%",
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    padding: 11,
    backgroundColor: COLORS.peach,
  },
  infoIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.peach,
  },
  infoLabel: {
    color: COLORS.clay,
    fontSize: 15,
  },
  infoValue: {
    marginTop: 3,
    color: COLORS.ink,
    fontSize: 15,
  },
});