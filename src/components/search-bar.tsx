import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/theme';
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchBar = () => {
  return (
    <View style={styles.searchRow}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color={COLORS.peach} />
        <Text style={styles.searchText}>Search</Text>
      </View>
      <Pressable style={styles.filterButton}>
        <Text style={styles.filterText}>Filter</Text>
        <Ionicons name="options" size={18} color="#FFFFFF" />
      </Pressable>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  searchBox: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    borderRadius: 999,
    paddingHorizontal: 17,
    backgroundColor: "#FFFFFF",
    boxShadow: "0 8px 18px rgba(31, 23, 21, 0.08)",
  },
  searchText: {
    color: COLORS.clay,
    fontSize: 15,
  },
  filterButton: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderRadius: 999,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: COLORS.orange,
  },
  filterText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
})
