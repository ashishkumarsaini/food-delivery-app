import { FC, ReactNode } from "react"
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";

export const ScreenWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom + 20,
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
        backgroundColor: COLORS.clay
      }}
    >
      {children}
    </ScrollView>
  )
}
