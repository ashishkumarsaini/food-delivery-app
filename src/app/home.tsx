import { Stack } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Food Delivery" }} />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 24,
          backgroundColor: "#FFF8F5",
        }}
      >
        <View style={{ gap: 8 }}>
          <Text style={{ color: "#130303", fontSize: 28, fontWeight: "800" }}>
            Welcome
          </Text>
          <Text style={{ color: "#7C3626", fontSize: 16, lineHeight: 23 }}>
            Start building the food delivery home experience here.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
