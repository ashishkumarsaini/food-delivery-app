import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from "react-native";
import { CustomText } from "../../../../components/text";
import { COLORS, FONTS } from "../../../../constants/theme";

export function CartHeader({ onBack }: { onBack: () => void }) {
  return (
    <View style={styles.header}>
      <Pressable style={styles.iconButton} onPress={onBack}>
        <Ionicons name="chevron-back" size={21} color={COLORS.ink} />
      </Pressable>
      <View style={styles.headerCopy}>
        <CustomText style={styles.title}>Cart</CustomText>
      </View>
      <Pressable style={styles.iconButton}>
        <Ionicons name="trash-outline" size={19} color={COLORS.clay} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  headerCopy: {
    alignItems: "center",
    gap: 2,
  },
  title: {
    color: COLORS.ink,
    fontSize: 22,
  },
});
