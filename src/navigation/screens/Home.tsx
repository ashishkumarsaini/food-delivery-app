import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/theme";
import { ScreenWrapper } from "../../components/Screen";
import SearchBar from "../../components/search-bar";
import PromoBanner from "../../components/promo-banner";
import { RESTRAURENTS } from "../../constants/restraurents";
import { DishTile } from '../../components/dish-tiles/dish-tile'

export function HomeScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper>
      <ScrollView style={styles.screen}>
        <View style={styles.header}>
          <View>
            <View style={styles.locationRow}>
              <Ionicons name="location" size={13} color={COLORS.peach} />
              <Text style={styles.eyebrow}>Location</Text>
            </View>
            <Text style={styles.location}>AI Safa Street, AI Wasi</Text>
          </View>
          <Pressable style={styles.bagButton} onPress={() => navigation.navigate("Cart")}>
            <Ionicons name="bag" size={18} color={COLORS.ink} />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </Pressable>
        </View>

        <SearchBar />
        <PromoBanner />

        <SectionHeader title="Picks For You 🔥" action="See All" />
        <View>
          {RESTRAURENTS.map((restraurent) => (
            <ScrollView key={restraurent.id} horizontal>
              {restraurent.dishes.map((dish) => (
                <DishTile
                  key={dish.id}
                  dish={dish}
                  restraurentId={restraurent.id}
                  restraurentName={restraurent.name}
                />
              ))}
            </ScrollView>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

function SectionHeader({ title, action }: { title: string; action: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionAction}>{action}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.clay,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  eyebrow: {
    color: COLORS.peach,
    fontSize: 12,
    opacity: 0.75,
  },
  location: {
    marginTop: 5,
    color: COLORS.ink,
    fontSize: 14,
    fontWeight: "700",
  },
  bagButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFFFFF",
  },
  badge: {
    position: "absolute",
    top: -3,
    right: -2,
    width: 17,
    height: 17,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.orange,
  },
  badgeText: {
    color: COLORS.ink,
    fontSize: 10,
    fontWeight: "900",
  },



  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    marginBottom: 10,
  },
  sectionTitle: {
    color: COLORS.ink,
    fontSize: 16,
    fontWeight: "800",
  },
  sectionAction: {
    color: COLORS.orange,
    fontSize: 12,
  },
  categoryList: {
    gap: 10,
  },
  categoryPill: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    borderRadius: 999,
    paddingLeft: 5,
    paddingRight: 16,
    backgroundColor: COLORS.wine,
  },
  categoryImage: {
    width: 34,
    height: 34,
    borderRadius: 999,
  },
  categoryText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  cardList: {
    gap: 16,
  },

});
