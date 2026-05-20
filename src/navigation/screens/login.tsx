import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { CustomText } from "../../components/text";
import { COLORS, FONTS } from "../../constants/theme";
import { useAuth } from "../../providers/auth-provider";
import { AppLogo } from "../../components/app-logo";

export const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login({ name: "Ashish", email, password });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        behavior="padding"
        style={[styles.screen, { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 24 }]}
      >
        <View />
        <View style={styles.header}>
          <CustomText style={styles.eyebrow}>Welcome back</CustomText>
          <CustomText style={styles.title}>Sign in to fresh food, faster.</CustomText>
          <CustomText style={styles.subtitle}>
            Continue ordering from your favorite kitchens and track every bite.
          </CustomText>
        </View>

        <View style={styles.form}>
          <AuthInput
            icon="mail-outline"
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <AuthInput
            icon="lock-closed-outline"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.actions}>
          <Button onPress={handleLogin}>
            <CustomText style={styles.primaryText}>Login</CustomText>
          </Button>
          <Pressable style={styles.linkButton} onPress={() => navigation.navigate("Register")}>
            <CustomText style={styles.linkMuted}>New here?</CustomText>
            <CustomText style={styles.linkText}>Create account</CustomText>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

function AuthInput({
  icon,
  ...props
}: React.ComponentProps<typeof TextInput> & { icon: keyof typeof Ionicons.glyphMap }) {
  return (
    <View style={styles.inputWrap}>
      <Ionicons name={icon} size={19} color={COLORS.clay} />
      <TextInput
        {...props}
        placeholderTextColor={COLORS.clay}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    backgroundColor: COLORS.peach,
  },

  header: {
    gap: 10,
  },
  eyebrow: {
    color: COLORS.orange,
    fontSize: 20,
    fontFamily: FONTS.semiBold,
  },
  title: {
    color: COLORS.ink,
    fontSize: 38,
    lineHeight: 44,
    fontFamily: FONTS.bold,
  },
  subtitle: {
    maxWidth: 320,
    color: COLORS.clay,
    fontSize: 18,
    lineHeight: 22,
  },
  form: {
    gap: 12,
  },
  inputWrap: {
    minHeight: 58,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 18,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },
  input: {
    flex: 1,
    color: COLORS.ink,
    fontFamily: FONTS.medium,
    fontSize: 18,
  },
  forgotButton: {
    alignSelf: "flex-end",
    paddingVertical: 4,
  },
  forgotText: {
    color: COLORS.orange,
    fontSize: 13,
    fontFamily: FONTS.semiBold,
  },
  actions: {
    gap: 18,
    paddingBottom: 100,
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: FONTS.semiBold,
  },
  linkButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
  },
  linkMuted: {
    color: COLORS.clay,
    fontSize: 18,
  },
  linkText: {
    color: COLORS.ink,
    fontSize: 18,
    fontFamily: FONTS.semiBold,
  },
});
