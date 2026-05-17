import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RESTRAURENTS } from '../../../../constants/restraurents'
import { DISH_VARIANT, DishTile } from '../../../../components/tiles/dish'

const ExploreByDishes = () => {
  return (
    <View style={styles.cardList}>
      <Text style={styles.title}>Popular Dishes</Text>
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