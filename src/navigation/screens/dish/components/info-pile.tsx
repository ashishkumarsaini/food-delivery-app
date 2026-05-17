import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../../constants/theme";

export function InfoPill({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }) {
  return (
    <View style={styles.infoPill}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={17} color={COLORS.orange} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text numberOfLines={1} style={styles.infoValue}>{value}</Text>
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
    backgroundColor: "#FFFFFF",
  },
  infoIcon: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFF4EC",
  },
  infoLabel: {
    color: COLORS.clay,
    fontSize: 11,
    fontWeight: "600",
  },
  infoValue: {
    marginTop: 3,
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: "800",
  },
});