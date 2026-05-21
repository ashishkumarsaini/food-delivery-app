import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../../components/Button";
import { CustomText } from "../../components/text";
import { COLORS, FONTS } from "../../constants/theme";
import { getValueFromStorage, saveValueToStorage } from "../../lib/storage";

export const RegisterScreen = () => {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (email.length === 0 || password.length === 0 || name.length === 0) {
      setError("Please enter all the details");
      return;
    }

    const value = await getValueFromStorage(email);

    if (value) {
      setError("User already exists")
      return;
    }

    await saveValueToStorage(email, { name, email, password }).then(() => {
      setError("")
      navigation.navigate("Login");
    }).catch((err) => {
      console.log(err);
      setError('Unable to create account')
    });

  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <KeyboardAvoidingView
        style={[styles.screen, { paddingTop: insets.top + 20, paddingBottom: insets.bottom + 24 }]}
      >
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color={COLORS.peach} />
        </Pressable>

        <View style={styles.header}>
          <CustomText style={styles.eyebrow}>Start eating better</CustomText>
          <CustomText style={styles.title}>Create your food account.</CustomText>
          <CustomText style={styles.subtitle}>
            Save favorites, checkout faster, and discover warm meals around you.
          </CustomText>
        </View>

        <View style={styles.form}>
          <AuthInput icon="person-outline" placeholder="Full name" value={name} onChangeText={setName} />
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
          {error && <CustomText style={styles.error}>{error}</CustomText>}
          <Button onPress={handleRegister}>
            <CustomText style={styles.primaryText}>Create account</CustomText>
          </Button>
          <Pressable style={styles.linkButton} onPress={() => navigation.navigate("Login")}>
            <CustomText style={styles.linkMuted}>Already joined?</CustomText>
            <CustomText style={styles.linkText}>Login</CustomText>
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
  backButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: COLORS.wine,
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
  error: {
    textAlign: "center",
    color: "#FF453A",
    fontSize: 18,
  }
});
