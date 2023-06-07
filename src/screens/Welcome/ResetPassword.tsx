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

function ResetPassword({ navigation }: any) {
  const [verificationType, setVerificationType] = useState("email");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <CustomHeader
        title="Reset Password"
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
              Please enter your registered Phone Number or Email Address
            </Text>

            <View
              style={{
                ...styles.textInput,
                padding: SIZES.padding / 2,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => setVerificationType("email")}
                style={{
                  ...styles.verificationTypeButton,

                  backgroundColor:
                    verificationType === "email"
                      ? COLORS.primary_light_9
                      : COLORS.white,
                }}
              >
                {verificationType === "email" ? (
                  <Text
                    style={{
                      ...FONTS.text_700,
                      fontSize: 14,
                    }}
                  >
                    Email Address
                  </Text>
                ) : (
                  <Text
                    style={{
                      ...FONTS.text_400,
                      color: COLORS.dark_light,
                      fontSize: 14,
                    }}
                  >
                    Email Address
                  </Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setVerificationType("phone")}
                style={{
                  ...styles.verificationTypeButton,

                  backgroundColor:
                    verificationType === "phone"
                      ? COLORS.primary_light_9
                      : COLORS.white,
                }}
              >
                {verificationType === "phone" ? (
                  <Text
                    style={{
                      ...FONTS.text_700,
                      fontSize: 14,
                    }}
                  >
                    Phone Number
                  </Text>
                ) : (
                  <Text
                    style={{
                      ...FONTS.text_400,
                      fontSize: 14,

                      color: COLORS.dark_light,
                    }}
                  >
                    Phone Number
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            {/* EMAIL ADDRESS */}
            {verificationType === "email" ? (
              <TextInput
                value={emailAddress}
                onChangeText={setEmailAddress}
                placeholder="Enter Email..."
                style={styles.textInput}
              />
            ) : (
              <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Enter Phone Number..."
                style={styles.textInput}
              />
            )}

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
                navigation.navigate("OtpScreen");
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
  verificationTypeButton: {
    flex: 1,
    backgroundColor: COLORS.primary_light_9,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: 5,
  },
});
export default ResetPassword;
