import { Text, View } from "react-native";
import { ScreenWrapper } from "../../components/Screen";

export function HomeScreen() {
  return (
    <ScreenWrapper>
      <View style={{ gap: 8 }}>
        <Text style={{ color: "#130303", fontSize: 28, fontWeight: "800" }}>
          Welcome
        </Text>
        <Text style={{ color: "#7C3626", fontSize: 16, lineHeight: 23 }}>
          Start building the food delivery home experience here.
        </Text>
      </View>
    </ScreenWrapper>
  );
}