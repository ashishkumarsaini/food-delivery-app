import { StyleSheet, Text, View } from "react-native";
import { Dish } from "../../../../types/dish";
import { COLORS } from "../../../../constants/theme";

export function DishInfo({ dish }: { dish: Dish; }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {dish.name}
      </Text>
      <Text style={styles.ingredients}>
        Ingredients: {dish.description} Freshly prepared with balanced seasoning, soft texture, and a warm finish.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    color: COLORS.ink,
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 36,
  },
  serving: {
    color: COLORS.clay,
    fontWeight: "300",
  },
  ingredients: {
    color: COLORS.ink,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 17,
  },
});
