import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RESTRAURENTS } from '../../../../constants/restraurents'
import { RestraurentTile } from '../../../../components/tiles/restraurent-tile'

const ExploreByPlaces = () => {
  return (
    <ScrollView horizontal contentContainerStyle={{ gap: 10 }} showsHorizontalScrollIndicator={false}>
      {RESTRAURENTS.map((restraurent) => (
        <RestraurentTile key={restraurent.id} restraurent={restraurent} />
      ))}
    </ScrollView>
  )
}

export default ExploreByPlaces

const styles = StyleSheet.create({})