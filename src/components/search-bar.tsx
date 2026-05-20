import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/theme';
import Ionicons from "@expo/vector-icons/Ionicons";
import { CustomText } from './text';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.searchRow}>
      <View style={styles.searchBox} >
        <TextInput placeholder="Search for Dishes" value={searchQuery} onChangeText={setSearchQuery} style={styles.input} />
      </View>
      <Pressable style={styles.filterButton} onPress={() => navigation.navigate("SearchTab", { searchQuery })}>
        <Ionicons name="search" size={18} color={COLORS.peach} />
      </Pressable>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchRow: {
    flexDirection: "row",
    gap: 10,
  },
  searchBox: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    gap: 9,
    borderRadius: 999,
    paddingHorizontal: 17,
    backgroundColor: COLORS.peach,
    boxShadow: "0 8px 18px rgba(31, 23, 21, 0.08)",
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: COLORS.wine
  },
  filterButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    backgroundColor: COLORS.wine,
  }
})
