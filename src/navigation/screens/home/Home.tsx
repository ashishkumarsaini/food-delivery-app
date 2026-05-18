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
      <ScrollView style={styles.screen} contentContainerStyle={{ gap: 15, paddingBottom: 100 }}>
        <View style={[styles.paddingContainer, styles.sectionSpace]}>
          <HomeHeader />
        </View>
        <View style={[styles.paddingContainer, styles.sectionSpace]}>
          <SearchBar />
        </View>
        <View style={[styles.paddingContainer, styles.sectionSpace]}>
          <PromoBanner />
        </View>
        <View style={styles.sectionSpace}>
          <ExploreByPlaces />
        </View>
        <View style={styles.sectionSpace}>
          <ExploreByDishes />
        </View>
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
  },
  sectionSpace: {
    paddingTop: 20,
  }
});
