import { Button } from "../../components/Button";
import { COLORS } from "../../constants/theme";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { CustomText } from "../../components/text";

export function GetStartedScreen() {
  const navigation = useNavigation<any>();

  const onPress = () => {
    navigation.navigate("Home");
  };

  return (
    <View
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <CustomText
              style={styles.title}
            >
              Food Delivery
            </CustomText>
            <CustomText
              style={styles.description}
            >
              Order warm meals, fresh snacks, and your favorite cravings from nearby kitchens.
            </CustomText>
          </View>
        </View>
        <Button onPress={onPress} >
          <CustomText
            style={{
              color: COLORS.peach,
              fontSize: 20,
            }}
          >
            Get Started
          </CustomText>
        </Button>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 58,
    paddingBottom: 28,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 30,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 22,
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 36,
  },
  textContainer: {
    alignItems: "center",
    gap: 10,
  },
  title: {
    color: COLORS.ink,
    fontSize: 33,
    letterSpacing: 0,
    lineHeight: 39,
    textAlign: "center",
    textTransform: "uppercase",
  },
  description: {
    maxWidth: 320,
    color: COLORS.clay,
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
  }
})
