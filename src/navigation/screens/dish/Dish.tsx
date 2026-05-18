import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { RESTRAURENTS } from "../../../constants/restraurents";
import { DishGallery } from "./components/dish-gallery";
import { DishInfo } from "./components/dish-info";
import { Recommendation } from "./components/add-to-order";
import { DishCheckoutBar } from "./components/dish-checkout-bar";
import { ScreenWrapper } from "../../../components/Screen";
import { useCart } from "../../../providers/cart-provider";
import { Dish } from "../../../types/dish";

export function DishScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { addToCart } = useCart();

  const { restraurentId, dishId } = route.params;

  const restraurent = RESTRAURENTS.find((item) => item.id === restraurentId);
  const dish = restraurent?.dishes.find((item) => item.id === dishId);
  const addOns = restraurent?.dishes.filter((item) => item.id !== dish?.id) || [];

  if (!restraurent || !dish) {
    return null;
  }

  const handleAddToCart = () => {
    addToCart(restraurentId, dish)
    navigation.navigate("Cart");
  };

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
          <Recommendation dishes={addOns} restraurentId={restraurentId} restraurentName={restraurent.name} />
        </View>
      </ScrollView>
      <DishCheckoutBar
        price={dish.price}
        onAddToCart={handleAddToCart}
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
