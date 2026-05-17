import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { RESTRAURENTS } from "../../../constants/restraurents";
import { DishGallery } from "./components/dish-gallery";
import { DishInfo } from "./components/dish-info";
import { AddToOrder } from "./components/add-to-order";
import { DishCheckoutBar } from "./components/dish-checkout-bar";
import { ScreenWrapper } from "../../../components/Screen";

export function DishScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const { restraurentId, dishId } = route.params;

  const restraurent = RESTRAURENTS.find((item) => item.id === restraurentId);
  const dish = restraurent?.dishes.find((item) => item.id === dishId);
  const addOns = restraurent?.dishes.filter((item) => item.id !== dish?.id) || [];

  if (!restraurent || !dish) {
    return null;
  }

  return (
    <ScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <DishGallery
          image={dish.image}
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <DishInfo dish={dish} restraurent={restraurent} />
          <AddToOrder dishes={addOns} restraurentId={restraurentId} restraurentName={restraurent.name} />
        </View>
      </ScrollView>
      <DishCheckoutBar
        price={dish.price}
        onAddToCart={() => navigation.navigate("Cart")}
      />
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    gap: 20,
  },
});
