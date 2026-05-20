import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import { ScreenWrapper } from '../../../components/Screen'
import { CustomText } from '../../../components/text'
import { RESTRAURENTS } from '../../../constants/restraurents'
import { COLORS, FONTS } from '../../../constants/theme'
import { Order, useOrders } from '../../../providers/orders-provider'

export const OrdersScreen = () => {
  const { orders } = useOrders()

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <FlatList
          data={orders}
          keyExtractor={(order) => order.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <View style={styles.header}>
              <CustomText style={styles.eyebrow}>Orders</CustomText>
              <CustomText style={styles.title}>My Orders</CustomText>
            </View>
          }
          renderItem={({ item }) => <OrderCard order={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <View style={styles.emptyCard}>
              <Ionicons name="receipt-outline" size={32} color={COLORS.orange} />
              <CustomText style={styles.emptyTitle}>No orders yet</CustomText>
              <CustomText style={styles.emptyText}>
                Checkout from your cart and your order will show up here.
              </CustomText>
            </View>
          }
        />
      </View>
    </ScreenWrapper>
  )
}

const OrderCard = ({ order }: { order: Order }) => {
  const orderedAt = new Date(order.createdAt).toLocaleString(undefined, {
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
  })

  return (
    <View style={styles.orderCard}>
      <View style={styles.orderTop}>
        <View>
          <CustomText style={styles.orderId}>#{order.id.slice(-6)}</CustomText>
          <CustomText style={styles.orderTime}>{orderedAt}</CustomText>
        </View>
        <View style={styles.statusPill}>
          <View style={styles.statusDot} />
          <CustomText style={styles.statusText}>{order.status}</CustomText>
        </View>
      </View>

      <View style={styles.items}>
        {order.items.map((item) => {
          const restraurent = RESTRAURENTS.find((place) => place.id === item.restraurentId)

          return (
            <View key={item.id} style={styles.itemRow}>
              <Image source={{ uri: item.dish.image }} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <CustomText numberOfLines={1} style={styles.itemName}>
                  {item.dish.name}
                </CustomText>
                <CustomText numberOfLines={1} style={styles.itemMeta}>
                  {restraurent?.name ?? 'Restaurant'} · Qty {item.quantity}
                </CustomText>
              </View>
              <CustomText style={styles.itemPrice}>
                Rs. {(item.dish.price * item.quantity).toFixed(0)}
              </CustomText>
            </View>
          )
        })}
      </View>

      <View style={styles.totalRow}>
        <CustomText style={styles.totalLabel}>{order.itemCount} items</CustomText>
        <CustomText style={styles.totalValue}>Rs. {order.total.toFixed(0)}</CustomText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.peach,
    paddingHorizontal: 18,
  },
  listContent: {
    paddingTop: 24,
    paddingBottom: 112,
  },
  header: {
    gap: 6,
    marginBottom: 22,
  },
  eyebrow: {
    color: COLORS.clay,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  title: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 34,
  },
  separator: {
    height: 14,
  },
  emptyCard: {
    alignItems: 'center',
    gap: 8,
    marginTop: 48,
    borderRadius: 28,
    backgroundColor: '#FFF7F2',
    padding: 26,
  },
  emptyTitle: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 19,
  },
  emptyText: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 14,
    textAlign: 'center',
  },
  orderCard: {
    borderRadius: 28,
    backgroundColor: '#FFF7F2',
    padding: 16,
  },
  orderTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  orderId: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 18,
  },
  orderTime: {
    marginTop: 4,
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  statusPill: {
    minHeight: 34,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderRadius: 17,
    backgroundColor: COLORS.peach,
    paddingHorizontal: 11,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.orange,
  },
  statusText: {
    color: COLORS.clay,
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
  items: {
    gap: 10,
    marginTop: 16,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemImage: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: COLORS.peach,
  },
  itemInfo: {
    flex: 1,
    gap: 3,
  },
  itemName: {
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  itemMeta: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 12,
  },
  itemPrice: {
    color: COLORS.orange,
    fontFamily: FONTS.medium,
    fontSize: 13,
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1D7CA',
    paddingTop: 14,
  },
  totalLabel: {
    color: COLORS.clay,
    fontFamily: FONTS.regular,
    fontSize: 13,
  },
  totalValue: {
    color: COLORS.ink,
    fontFamily: FONTS.semiBold,
    fontSize: 17,
  },
})
