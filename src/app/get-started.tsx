import Button from "@/components/button";
import { palette } from "@/constants/color-pallet";
import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";




export default function GetStartedScreen() {

  const onPress = () => {
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingTop: 58,
          paddingBottom: 28,
          backgroundColor: "#FFF8F5",
        }}
      >
        <View style={{ flex: 1, justifyContent: "center", gap: 30 }}>
          <View style={{ alignItems: "center", justifyContent: "center", gap: 22 }}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85",
              }}
              style={{
                width: '100%',
                aspectRatio: 1 / 1,
                borderRadius: 36,
              }}
            />
            <View style={{ alignItems: "center", gap: 10 }}>
              <Text
                style={{
                  color: palette.ink,
                  fontSize: 33,
                  fontWeight: "900",
                  letterSpacing: 0,
                  lineHeight: 39,
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Food Delivery
              </Text>
              <Text
                style={{
                  maxWidth: 320,
                  color: palette.clay,
                  fontSize: 16,
                  lineHeight: 23,
                  textAlign: "center",
                }}
              >
                Order warm meals, fresh snacks, and your favorite cravings from nearby kitchens.
              </Text>
            </View>
          </View>
          <Button onPress={onPress} label="Get Started" />
        </View>
      </View>
    </>
  );
}
