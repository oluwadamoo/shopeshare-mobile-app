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
import { CustomButton, CustomHeader, GoBack, OtpInput } from "../../components";

function OtpScreen({ navigation }: any) {
  const [otp, setOtp] = useState("");
  const [hasError, setHasError] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <CustomHeader
        title="Otp"
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
              Please enter the six digit code that was sent to your email
            </Text>

            {/* EMAIL ADDRESS */}
            <OtpInput setOtp={setOtp} error={hasError} />

            <Text
              style={{
                ...FONTS.text_400,
                textAlign: "center",
                marginTop: SIZES.padding * 1.2,
              }}
            >
              Didn't get any message?{" "}
              <Text
                onPress={() => console.log("RESEND")}
                style={{
                  color: COLORS.primary_dark,
                }}
              >
                Resend{" "}
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
              label="Continue"
              onPress={() => {
                navigation.navigate("NewPassword");
              }}
            />
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
export default OtpScreen;
