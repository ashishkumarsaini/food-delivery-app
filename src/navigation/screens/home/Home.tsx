import { ScrollView, StyleSheet, View } from "react-native";
import { ScreenWrapper } from "../../../components/Screen";
import SearchBar from "../../../components/search-bar";
import PromoBanner from "../../../components/promo-banner";
import ExploreByPlaces from "./components/explore-by-places";
import ExploreByDishes from "./components/explore-by-dishes";
import HomeHeader from "./components/header";

export function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView style={styles.screen} contentContainerStyle={{ gap: 15 }}>
        <View style={styles.paddingContainer}>
          <HomeHeader />
        </View>
        <View style={styles.paddingContainer}>
          <SearchBar />
        </View>
        <View style={styles.paddingContainer}>
          <PromoBanner />
        </View>
        <ExploreByPlaces />
        <ExploreByDishes />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  paddingContainer: {
    paddingHorizontal: 15
  }
});
