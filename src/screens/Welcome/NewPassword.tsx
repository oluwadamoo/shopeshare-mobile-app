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

function NewPassword({ navigation }: any) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <CustomHeader
        title="New Password"
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
              Please enter your new password
            </Text>

            {/* NEW PASSWORD*/}
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter New Password"
              style={styles.textInput}
            />

            {/* CONFIRM PASSWORD */}
            <TextInput
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={setConfirmPassword}
              placeholder="Confirm New Password"
              style={styles.textInput}
            />

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
                navigation.navigate("Signin");
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
export default NewPassword;
