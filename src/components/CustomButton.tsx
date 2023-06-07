import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { TextStyle } from "react-native";
import { COLORS, FONTS } from "../constants";

interface CustomButtonProps {
  onPress: () => void;
  label: string;
  containerStyles?: ViewStyle;
  labelStyles?: TextStyle;
}
const CustomButton = ({
  onPress,
  label,
  containerStyles,
  labelStyles,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "100%",
        backgroundColor: COLORS.white,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        ...containerStyles,
      }}
    >
      <Text
        style={{
          ...FONTS.text_700,
          color: COLORS.dark,
          ...labelStyles,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
