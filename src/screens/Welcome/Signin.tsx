import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, FONTS, ICONS, SIZES } from "../../constants";
import { CustomButton, CustomHeader, GoBack } from "../../components";

function Signin({ navigation }: any) {
  // const [country] = useState("Nigeria");
  // const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <CustomHeader
        title="Sign In"
        headerLeft={<GoBack navigation={navigation} />}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: SIZES.padding,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.OS === "android" ? 60 : 80}
            behavior={Platform.OS === "android" ? "height" : "padding"}
          >
            <Text style={[FONTS.text_600, { marginBottom: SIZES.padding * 2 }]}>
              Sign in to access your account
            </Text>

            {/* EMAIL ADDRESS */}
            <TextInput
              value={emailAddress}
              onChangeText={setEmailAddress}
              placeholder="Email Address"
              style={styles.textInput}
            />

            {/* PASSWORD */}
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholder="Password"
              style={styles.textInput}
            />

            <Text style={[FONTS.text_400]}>
              Forgot your password?{" "}
              <Text
                onPress={() => navigation.navigate("ResetPassword")}
                style={{
                  textDecorationLine: "underline",
                  textDecorationColor: COLORS.primary,
                }}
              >
                Click here{" "}
              </Text>
            </Text>
            <CustomButton
              containerStyles={{
                backgroundColor: COLORS.primary,
                marginTop: SIZES.padding * 2,
              }}
              labelStyles={{
                color: COLORS.white,
              }}
              label="Sign In"
              onPress={() => {
                navigation.navigate("BottomTabs", {
                  screen: "HomeStack",
                });
              }}
            />

            <Text
              style={[
                FONTS.text_400,
                { textAlign: "center", marginVertical: SIZES.padding },
              ]}
            >
              Or
            </Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity style={styles.socialBtn}>
                <Image source={ICONS.google} style={styles.btnIcon} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.socialBtn, { marginLeft: SIZES.padding * 1.4 }]}
              >
                <Image source={ICONS.apple} style={styles.btnIcon} />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: COLORS.border_color,
    height: 48,
    padding: SIZES.padding,
    borderRadius: 5,
    marginBottom: SIZES.padding * 1.4,
    ...FONTS.text_400,
  },
  btnIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  socialBtn: {
    flex: 1,
    borderColor: COLORS.border_color,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: SIZES.padding,
    borderRadius: 6,
  },
});
export default Signin;
