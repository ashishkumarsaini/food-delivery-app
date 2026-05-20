import Ionicons from '@expo/vector-icons/Ionicons'
import { Route, useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, Pressable, StyleSheet, View } from 'react-native'
import { ScreenWrapper } from '../../../components/Screen'
import { DISH_VARIANT, DishTile } from '../../../components/tiles/dish'
import { CustomText } from '../../../components/text'
import { RESTRAURENTS } from '../../../constants/restraurents'
import { COLORS, FONTS } from '../../../constants/theme'

export function RestraurentScreen({ route }: { route: Route<string> }) {
  const navigation = useNavigation()
  const { restraurentId } = route.params as { restraurentId: string }
  const restraurent = RESTRAURENTS.find((item) => item.id === restraurentId)

  if (!restraurent) return null

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <FlatList
          data={restraurent.dishes}
          keyExtractor={(dish) => dish.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View>
              <View style={styles.info}>
                <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" size={20} color={COLORS.ink} />
                </Pressable>
                <View>
                  <CustomText style={styles.title}>{restraurent.name}</CustomText>
                  <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={16} color={COLORS.orange} />
                    <CustomText numberOfLines={1} style={styles.location}>
                      {restraurent.location}
                    </CustomText>
                  </View>
                </View>
              </View>

              <View style={styles.hero}>
                <Image source={{ uri: restraurent.image }} style={styles.heroImage} />
                <View style={styles.heroShade} />
                <View style={[styles.statusPill, !restraurent.isOpen && styles.closedPill]}>
                  <View style={[styles.statusDot, !restraurent.isOpen && styles.closedDot]} />
                  <CustomText style={styles.statusText}>
                    {restraurent.isOpen ? 'Open now' : 'Closed'}
                  </CustomText>
                </View>
              </View>

              <View style={styles.summaryRow}>
                <SummaryItem icon="restaurant-outline" label="Menu" value={`${restraurent.dishes.length} dishes`} />
                <SummaryItem icon="time-outline" label="Delivery" value="25-40 min" />
              </View>

              <View style={styles.menuHeader}>
                <CustomText style={styles.menuTitle}>Popular dishes</CustomText>
                <CustomText style={styles.menuCount}>{restraurent.dishes.length} items</CustomText>
              </View>
            </View>
          }
          renderItem={({ item }) => (
            <View style={styles.dishWrap}>
              <DishTile
                dish={item}
                restraurentId={restraurent.id}
                restraurentName={restraurent.name}
                variant={DISH_VARIANT.card}
              />
            </View>
          )}
        />
      </View>
    </ScreenWrapper>
  )
};

const SummaryItem = ({
  icon,
  label,
  value,
}: {
  icon: keyof typeof Ionicons.glyphMap
  label: string
  value: string
}) => (
  <View style={styles.summaryItem}>
    <Ionicons name={icon} size={18} color={COLORS.orange} />
    <View style={styles.summaryText}>
      <CustomText style={styles.summaryLabel}>{label}</CustomText>
      <CustomText style={styles.summaryValue}>{value}</CustomText>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContent: {
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 112,
  },
  hero: {
    marginTop: 22,
    height: 250,
    overflow: 'hidden',
    borderRadius: 32,
    backgroundColor: COLORS.wine,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroShade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 120,
    backgroundColor: 'rgba(19, 3, 3, 0.35)',
  },
  backButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    backgroundColor: COLORS.peach,
  },
  statusPill: {
    position: 'absolute',
    right: 14,
    bottom: 14,
    minHeight: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 18,
    backgroundColor: COLORS.peach,
    paddingHorizontal: 13,
  },
  closedPill: {
    backgroundColor: COLORS.peach,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2F7D4E',
  },
  closedDot: {
    backgroundColor: COLORS.clay,
  },
  statusText: {
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  title: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 34,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  location: {
    flex: 1,
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 18,
  },
  summaryItem: {
    flex: 1,
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 22,
    backgroundColor: COLORS.peach,
    padding: 14,
  },
  summaryText: {
    flex: 1,
    gap: 2,
  },
  summaryLabel: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  summaryValue: {
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
    marginBottom: 14,
  },
  menuTitle: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 21,
  },
  menuCount: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
  dishWrap: {
    marginBottom: 18,
  },
});
