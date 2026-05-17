import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RESTRAURENTS } from '../../../../constants/restraurents'
import { DishTile } from '../../../../components/tiles/dish-tile'

const ExploreByDishes = () => {
  return (
    <View style={styles.cardList}>
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
  )
}

export default ExploreByDishes

const styles = StyleSheet.create({
  cardList: {
    gap: 16,
  }
})