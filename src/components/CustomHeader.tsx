import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

interface HeaderProps {
  title: string;
  headerLeft?: any;
  headerRight?: any;
}
const CustomHeader = ({ title, headerLeft, headerRight }: HeaderProps) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        flexDirection: "row",
        padding: SIZES.padding,
        paddingTop: SIZES.padding * 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {headerLeft}
        <Text style={[FONTS.text_700, { color: COLORS.white }]}>{title}</Text>
      </View>

      {headerRight}
    </View>
  );
};

export default CustomHeader;
