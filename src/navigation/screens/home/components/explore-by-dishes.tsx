import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { RESTRAURENTS } from '../../../../constants/restraurents'
import { DISH_VARIANT, DishTile } from '../../../../components/tiles/dish'
import { CustomText } from '../../../../components/text'

const ExploreByDishes = () => {
  return (
    <View style={styles.cardList}>
      <CustomText style={styles.title}>Popular Dishes</CustomText>
      {RESTRAURENTS.map((restraurent) => (
        <ScrollView key={restraurent.id} horizontal contentContainerStyle={{ gap: 10 }} showsHorizontalScrollIndicator={false}>
          {restraurent.dishes.map((dish) => (
            <DishTile
              key={dish.id}
              dish={dish}
              restraurentId={restraurent.id}
              restraurentName={restraurent.name}
              variant={DISH_VARIANT.card}
            />
          ))}
        </ScrollView>
      ))}
    </View>
  )
}

export default ExploreByDishes

const styles = StyleSheet.create({
  cardList: {
    gap: 16,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '900'
  }
})