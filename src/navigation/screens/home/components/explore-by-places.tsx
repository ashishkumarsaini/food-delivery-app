import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { RESTRAURENTS } from '../../../../constants/restraurents'
import { RestraurentTile } from '../../../../components/tiles/restraurent-tile'
import { CustomText } from '../../../../components/text'

const ExploreByPlaces = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Places</CustomText>
      <ScrollView horizontal contentContainerStyle={{ gap: 10 }} showsHorizontalScrollIndicator={false}>
        {RESTRAURENTS.map((restraurent) => (
          <RestraurentTile key={restraurent.id} restraurent={restraurent} />
        ))}
      </ScrollView>
    </View>
  )
}

export default ExploreByPlaces

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    gap: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
  }
})