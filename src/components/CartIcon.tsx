import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ICONS, COLORS } from "../constants";

const CartIcon = () => {
  return (
    <TouchableOpacity>
      <Image
        source={ICONS.cart_icon}
        style={{ width: 24, height: 24, tintColor: COLORS.white }}
      />
    </TouchableOpacity>
  );
};

export default CartIcon;
