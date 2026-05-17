import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RESTRAURENTS } from "../../../constants/restraurents";
import { DishGallery } from "./components/dish-gallery";
import { DishInfo } from "./components/dish-info";
import { AddToOrder } from "./components/add-to-order";
import { DishCheckoutBar } from "./components/dish-checkout-bar";
import { ScreenWrapper } from "../../../components/Screen";

export function DishScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const insets = useSafeAreaInsets();

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
      >
        <DishGallery
          image={dish.image}
          onBack={() => navigation.goBack()}
        />
        <View style={styles.content}>
          <DishInfo dish={dish} />
          <AddToOrder dishes={addOns.length > 0 ? addOns : restraurent.dishes} />
        </View>
      </ScrollView>
      <DishCheckoutBar
        price={dish.price}
        bottomInset={insets.bottom}
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
