import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, ICONS, SIZES } from "../constants";
import { StyleSheet } from "react-native";

const GoBack = ({ navigation }: any) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        marginRight: SIZES.padding,
      }}
    >
      <Image
        source={ICONS.arrow_left}
        style={{
          ...styles.btnIcon,
          tintColor: COLORS.white,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
export default GoBack;
