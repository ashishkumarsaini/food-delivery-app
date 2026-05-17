import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../../constants/theme";

export function DishGallery({
  image,
  onBack,
}: {
  image: string;
  onBack: () => void;
}) {
  return (
    <View>
      <View style={styles.actions}>
        <Pressable style={styles.iconButton} onPress={onBack}>
          <Ionicons name="chevron-back" size={21} color={COLORS.ink} />
        </Pressable>
        <Pressable style={styles.favoriteButton}>
          <Ionicons name="heart" size={21} color={COLORS.orange} />
        </Pressable>
      </View>

      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.peach
  },
  favoriteButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.peach
  },
  image: {
    width: 400,
    height: 400,
    maxHeight: 400,
  },
});
