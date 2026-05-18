import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { Dish } from "../../../../types/dish";
import { Restraurent } from "../../../../types/restraurent";
import { COLORS } from "../../../../constants/theme";
import { InfoPill } from "./info-pile";
import { Link } from "@react-navigation/native";
import { CustomText } from "../../../../components/text";

export function DishInfo({ dish, restraurent }: { dish: Dish; restraurent: Restraurent }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <View style={{ flex: 1 }}>
          <Link
            screen='Restraurent'
            params={{ restraurentId: restraurent.id }}
            style={styles.restaurant}>
            By {restraurent.name}
          </Link>
          <CustomText style={styles.title}>{dish.name}</CustomText>
        </View>
        <View style={styles.priceBadge}>
          <CustomText style={styles.price}>${dish.price.toFixed(2)}</CustomText>
        </View>
      </View>

      <CustomText style={styles.description}>{dish.description}</CustomText>

      <View style={styles.detailsGrid}>
        <InfoPill icon="time-outline" label="Delivery" value={dish.deliveryTime} />
        <InfoPill
          icon={dish.type === "veg" ? "leaf-outline" : "flame-outline"}
          label="Dish type"
          value={dish.type === "veg" ? "Veg" : "Non-veg"}
        />
        <InfoPill
          icon={dish.available ? "checkmark-circle-outline" : "close-circle-outline"}
          label="Status"
          value={dish.available ? "Available" : "Sold out"}
        />
        <InfoPill
          icon={restraurent.isOpen ? "storefront-outline" : "moon-outline"}
          label="Restaurant"
          value={restraurent.isOpen ? "Open now" : "Closed"}
        />
      </View>

      <View style={styles.locationCard}>
        <View style={styles.locationIcon}>
          <Ionicons name="location-outline" size={18} color={COLORS.orange} />
        </View>
        <View style={{ flex: 1 }}>
          <CustomText style={styles.locationLabel}>Kitchen location</CustomText>
          <CustomText style={styles.locationText}>{restraurent.location}</CustomText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 14,
  },
  title: {
    color: COLORS.ink,
    fontSize: 29,
    fontWeight: "600",
    lineHeight: 36,
  },
  restaurant: {
    marginBottom: 10,
    color: COLORS.clay,
    fontSize: 15,
    fontWeight: "700",
  },
  priceBadge: {
    borderRadius: 999,
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: COLORS.peach,
  },
  price: {
    color: COLORS.ink,
    fontSize: 14,
    fontWeight: "800",
  },
  description: {
    color: COLORS.wine,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  locationCard: {
    minHeight: 62,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 20,
    padding: 13,
    backgroundColor: "#FFFFFF",
  },
  locationIcon: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#FFF4EC",
  },
  locationLabel: {
    color: COLORS.clay,
    fontSize: 11,
    fontWeight: "600",
  },
  locationText: {
    marginTop: 3,
    color: COLORS.ink,
    fontSize: 13,
    fontWeight: "800",
  },
});
