import Ionicons from '@expo/vector-icons/Ionicons'
import React, { FC, useMemo, useState } from 'react'
import { FlatList, StyleSheet, TextInput, View } from 'react-native'
import { ScreenWrapper } from '../../components/Screen'
import { CustomText } from '../../components/text'
import { Route } from '@react-navigation/native'
import { COLORS, FONTS } from '../../constants/theme'
import { RESTRAURENTS } from '../../constants/restraurents'
import { DISH_VARIANT, DishTile } from '../../components/tiles/dish'
import { Dish } from '../../types/dish'

type SearchDish = {
  dish: Dish
  restraurentId: string
  restraurentName: string
  location: string
}

const allDishes = RESTRAURENTS.flatMap((restraurent) =>
  restraurent.dishes.map((dish) => ({
    dish,
    restraurentId: restraurent.id,
    restraurentName: restraurent.name,
    location: restraurent.location,
  })),
)

const SearchScreen: FC<{ route: Route<string> }> = ({ route }) => {
  const { searchQuery } = route?.params as { searchQuery?: string } || { searchQuery: "" }
  const [query, setQuery] = useState(searchQuery ?? '')

  const filteredDishes = useMemo(() => {
    if (!query) {
      return []
    }

    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return allDishes
    }

    return allDishes.filter(({ dish, restraurentName, location }) => {
      const searchableText = [
        dish.name,
        dish.description,
        dish.type,
        restraurentName,
        location,
      ].join(' ').toLowerCase()

      return searchableText.includes(normalizedQuery)
    })
  }, [query])

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <CustomText style={styles.eyebrow}>Search</CustomText>
          <CustomText style={styles.title}>Find your next bite</CustomText>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={COLORS.clay} />
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search dishes, places, veg..."
            placeholderTextColor={COLORS.clay}
            style={styles.input}
          />
        </View>

        <View style={styles.resultHeader}>
          <CustomText style={styles.resultTitle}>
            {query.trim() ? 'Results' : 'Popular dishes'}
          </CustomText>
          <CustomText style={styles.resultCount}>{filteredDishes.length} found</CustomText>
        </View>

        <FlatList
          data={filteredDishes}
          keyExtractor={({ dish }) => dish.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.tileWrap}>
              <DishTile
                dish={item.dish}
                restraurentId={item.restraurentId}
                restraurentName={item.restraurentName}
                variant={DISH_VARIANT.card}
              />
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Ionicons name="restaurant-outline" size={28} color={COLORS.orange} />
              <CustomText style={styles.emptyTitle}>No dishes found</CustomText>
              <CustomText style={styles.emptyText}>Try another dish, restaurant, or food type.</CustomText>
            </View>
          }
        />
      </View>
    </ScreenWrapper>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 18,
  },
  header: {
    gap: 6,
    marginBottom: 18,
  },
  eyebrow: {
    color: COLORS.clay,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  title: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 32,
  },
  searchBox: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 27,
    backgroundColor: COLORS.peach,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 15,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 12,
  },
  resultTitle: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 20,
  },
  resultCount: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
  listContent: {
    paddingBottom: 110,
  },
  tileWrap: {
    width: '100%',
    marginBottom: 18,
  },
  emptyState: {
    alignItems: 'center',
    gap: 8,
    marginTop: 64,
    borderRadius: 28,
    backgroundColor: '#FFF7F2',
    padding: 24,
  },
  emptyTitle: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  emptyText: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 14,
    textAlign: 'center',
  },
})
