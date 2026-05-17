import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Dish } from "../../../../types/dish";
import { COLORS } from "../../../../constants/theme";

export function AddToOrder({ dishes }: { dishes: Dish[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add to order</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {dishes.map((dish) => (
          <Pressable key={dish.id} style={styles.card}>
            <View>
              <Image source={{ uri: dish.image }} style={styles.image} />
              <View style={styles.addButton}>
                <Ionicons name="add" size={15} color="#FFFFFF" />
              </View>
            </View>
            <Text numberOfLines={1} style={styles.name}>{dish.name}</Text>
            <Text style={styles.price}>${dish.price.toFixed(2)}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingLeft: 24,
  },
  heading: {
    color: COLORS.ink,
    fontSize: 21,
    fontWeight: "500",
  },
  list: {
    gap: 12,
    paddingRight: 24,
  },
  card: {
    width: 94,
  },
  image: {
    width: 94,
    height: 94,
    borderRadius: 8,
    backgroundColor: COLORS.peach,
  },
  addButton: {
    position: "absolute",
    top: 6,
    right: 6,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.orange,
  },
  name: {
    marginTop: 8,
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: "500",
  },
  price: {
    marginTop: 3,
    color: COLORS.clay,
    fontSize: 11,
    fontWeight: "500",
  },
});
