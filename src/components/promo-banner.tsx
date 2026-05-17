import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';
import { RESTRAURENTS } from '../constants/restraurents';

const featured = RESTRAURENTS.flatMap((restraurent) =>
  restraurent.dishes.map((dish) => ({ restraurent, dish }))
).filter((item) => item.dish.available);


const PromoBanner = () => {
  return (
    <View style={styles.promoCard}>
      <View style={{ flex: 1, gap: 10 }}>
        <Text style={styles.promoTitle}>Gonna Be a Good Day!</Text>
        <Text style={styles.promoCopy}>Free delivery, lover fees, & 10% cashback, pickup!</Text>
        <Pressable style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Order Now</Text>
        </Pressable>
      </View>
      <Image source={{ uri: featured[0].dish.image }} style={styles.promoImage} />
    </View>
  )
}

export default PromoBanner

const styles = StyleSheet.create({
  promoCard: {
    minHeight: 124,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    borderRadius: 22,
    padding: 14,
    backgroundColor: "#FFD53D",
    overflow: "hidden",
  },
  promoTitle: {
    color: COLORS.ink,
    fontSize: 19,
    fontWeight: "900",
  },
  promoCopy: {
    color: COLORS.ink,
    fontSize: 15,
  },
  orderButton: {
    alignSelf: "flex-start",
    marginTop: 10,
    borderRadius: 50,
    paddingHorizontal: 22,
    paddingVertical: 11,
    backgroundColor: COLORS.ink,
  },
  orderButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
  promoImage: {
    width: 120,
    height: 100,
    borderRadius: 18,
    marginLeft: 10,
    transform: [{ rotate: "-8deg" }],
  },
})
