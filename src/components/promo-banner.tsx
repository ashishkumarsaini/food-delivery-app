import { StyleSheet, View, Pressable, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';
import { RESTRAURENTS } from '../constants/restraurents';
import { CustomText } from './text';

const featured = RESTRAURENTS.flatMap((restraurent) =>
  restraurent.dishes.map((dish) => ({ restraurent, dish }))
).filter((item) => item.dish.available);


const PromoBanner = () => {
  return (
    <View style={styles.promoCard}>
      <View style={{ flex: 1, gap: 10 }}>
        <CustomText style={styles.promoTitle}>Gonna Be a Good Day!</CustomText>
        <CustomText style={styles.promoCopy}>Free delivery, lover fees, & 10% cashback, pickup!</CustomText>
        <Pressable style={styles.orderButton}>
          <CustomText style={styles.orderButtonText}>Order Now</CustomText>
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
    borderRadius: 10,
    padding: 14,
    backgroundColor: COLORS.wine,
    overflow: "hidden",
  },
  promoTitle: {
    color: COLORS.peach,
    fontSize: 19,
  },
  promoCopy: {
    color: COLORS.orange,
    fontSize: 15,
  },
  orderButton: {
    alignSelf: "flex-start",
    marginTop: 10,
    borderRadius: 50,
    paddingHorizontal: 22,
    paddingVertical: 11,
    backgroundColor: COLORS.peach,
  },
  orderButtonText: {
    fontSize: 15,
  },
  promoImage: {
    width: 120,
    height: 100,
    borderRadius: 18,
    marginLeft: 10,
    transform: [{ rotate: "-8deg" }],
  },
})
