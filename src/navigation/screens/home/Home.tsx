import { useNavigation } from "@react-navigation/native";
import { ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../../../constants/theme";
import { ScreenWrapper } from "../../../components/Screen";
import SearchBar from "../../../components/search-bar";
import PromoBanner from "../../../components/promo-banner";
import ExploreByPlaces from "./components/explore-by-places";
import ExploreByDishes from "./components/explore-by-dishes";

export function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView style={styles.screen}>
        <SearchBar />
        <PromoBanner />
        <ExploreByPlaces />
        <ExploreByDishes />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
