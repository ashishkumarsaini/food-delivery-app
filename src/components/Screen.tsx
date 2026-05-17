import { FC, ReactNode } from "react"
import { View } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ScreenWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom + 20,
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
      }}
    >
      {children}
    </View>
  )
}