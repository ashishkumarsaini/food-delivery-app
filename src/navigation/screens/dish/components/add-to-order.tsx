import { ScrollView, StyleSheet, View } from "react-native";
import { Dish } from "../../../../types/dish";
import { COLORS } from "../../../../constants/theme";
import { DishTile } from "../../../../components/tiles/dish";
import { CustomText } from "../../../../components/text";

export function Recommendation({ dishes, restraurentName, restraurentId }: { dishes: Dish[], restraurentName: string, restraurentId: string }) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.heading}>You may also like</CustomText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {dishes.map((dish) => (
          <DishTile key={dish.id} dish={dish} restraurentId={restraurentId} restraurentName={restraurentName} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    gap: 12,
  },
  heading: {
    color: COLORS.ink,
    fontSize: 21,
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
  },
  price: {
    marginTop: 3,
    color: COLORS.clay,
    fontSize: 11,
  },
});
