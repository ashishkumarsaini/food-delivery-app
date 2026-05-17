import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RESTRAURENTS } from "../../constants/restraurents";
import { COLORS } from "../../constants/theme";

export default function DishScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();
  const restraurent = RESTRAURENTS.find((item) => item.id === route.params?.restraurentId) ?? RESTRAURENTS[1];
  const dish = restraurent.dishes.find((item) => item.id === route.params?.dishId) ?? restraurent.dishes[0];

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 96 }}>
        <View style={styles.heroWrap}>
          <Image source={{ uri: dish.image }} style={styles.heroImage} />
          <View style={[styles.heroActions, { paddingTop: insets.top + 12 }]}>
            <Pressable style={styles.heroButton} onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
            </Pressable>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <Pressable style={styles.heroButton}>
                <Ionicons name="heart-outline" size={20} color="#FFFFFF" />
              </Pressable>
              <Pressable style={styles.heroButton}>
                <Ionicons name="share-social-outline" size={20} color="#FFFFFF" />
              </Pressable>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>{dish.name}</Text>
              <Text style={styles.subtitle}>By {restraurent.name}</Text>
            </View>
            <View style={styles.ratingRow}>
              <Ionicons name="star" size={16} color="#FFD53D" />
              <Text style={styles.rating}>4.7</Text>
            </View>
          </View>

          <View style={styles.sellerRow}>
            <Image source={{ uri: restraurent.dishes[1]?.image ?? dish.image }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <Text style={styles.seller}>Mitchel Santnar</Text>
              <Text style={styles.sellerId}>ID: 13256626</Text>
            </View>
            <Pressable style={styles.roundButton}>
              <Ionicons name="chatbubble" size={17} color="#FFFFFF" />
            </Pressable>
            <Pressable style={styles.roundButton}>
              <Ionicons name="call" size={17} color="#FFFFFF" />
            </Pressable>
          </View>

          <Text style={styles.blockTitle}>Description</Text>
          <Text style={styles.description}>
            {dish.description} Freshly prepared and packed with care. Shop now, and we deliver them fast!
            <Text style={styles.readMore}> Read more</Text>
          </Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoCard}>
              <Ionicons name="bicycle" size={20} color="#FFFFFF" />
              <View>
                <Text style={styles.infoLabel}>Delivery Time</Text>
                <Text style={styles.infoValue}>{dish.deliveryTime}</Text>
              </View>
            </View>
            <View style={styles.infoCard}>
              <Ionicons name="fast-food" size={20} color="#FFFFFF" />
              <View>
                <Text style={styles.infoLabel}>Dish Type</Text>
                <Text style={styles.infoValue}>{dish.type === "veg" ? "Veg" : "Non-veg"}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { bottom: insets.bottom + 16 }]}>
        <Text style={styles.price}>${dish.price.toFixed(2)}</Text>
        <Pressable style={styles.addButton} onPress={() => navigation.navigate("Cart")}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.ink,
  },
  heroWrap: {
    height: 320,
    borderBottomLeftRadius: 34,
    borderBottomRightRadius: 34,
    overflow: "hidden",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  heroActions: {
    position: "absolute",
    top: 0,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  heroButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "rgba(19, 3, 3, 0.48)",
  },
  content: {
    marginTop: -28,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 20,
    backgroundColor: "#241C1D",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
  },
  subtitle: {
    marginTop: 5,
    color: COLORS.peach,
    fontSize: 13,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  sellerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 22,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 999,
  },
  seller: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "800",
  },
  sellerId: {
    marginTop: 3,
    color: COLORS.peach,
    fontSize: 11,
  },
  roundButton: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.wine,
  },
  blockTitle: {
    marginTop: 24,
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },
  description: {
    marginTop: 8,
    color: COLORS.peach,
    fontSize: 13,
    lineHeight: 20,
  },
  readMore: {
    color: "#FFFFFF",
    fontWeight: "800",
  },
  infoGrid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
  },
  infoCard: {
    flex: 1,
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    paddingHorizontal: 13,
    backgroundColor: COLORS.ink,
  },
  infoLabel: {
    color: COLORS.peach,
    fontSize: 11,
  },
  infoValue: {
    marginTop: 3,
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },
  bottomBar: {
    position: "absolute",
    left: 18,
    right: 18,
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 999,
    paddingLeft: 18,
    paddingRight: 8,
    backgroundColor: COLORS.ink,
  },
  price: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
  },
  addButton: {
    minWidth: 132,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFD53D",
  },
  addButtonText: {
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: "900",
  },
});
