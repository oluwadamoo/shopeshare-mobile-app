import { Dimensions, TextStyle } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#63397B",
  primary_light: "#8E59AC",
  primary_light_9: "#8E59AC17",
  primary_lighter: "#E4B5FF",
  primary_dark: "#3F075F",
  primary_darker: "#45374D",
  white: "#FFFFFF",
  placeholder: "#898C8F",
  dark: "#333333",
  dark_light: "#929AA7",
  dark_70: "#000000B2",
  dark_light_70: "#3B3B3BB2",
  border_color: "#C2C4C6",
  gray: "#C4C4C4",
  green: "#39B54A",
  yellow: "#E09B09",
  yellow_15: "#FFB21126",
  blue_10: "#274B891A",
  blue_light_50: "#6E85AE80",
  gray_51: "#E3E8F082",
  red: "red",
};

export const SIZES = {
  padding: 16,
  text: 16,
  small_text: 12,
  height,
  width,
};

interface StyleObject {
  text_400: TextStyle;
  text_600: TextStyle;
  text_700: TextStyle;
  title: TextStyle;
  small_text: TextStyle;
}
export const FONTS: StyleObject = {
  text_400: { fontFamily: "SpaceGrotesk-Regular", fontSize: 16 },
  text_600: { fontFamily: "SpaceGrotesk-Medium", fontSize: 16 },
  text_700: { fontFamily: "SpaceGrotesk-Medium", fontSize: 16 },
  title: { fontFamily: "SpaceGrotesk-SemiBold", fontSize: 24 },
  small_text: { fontFamily: "SpaceGrotesk-Regular", fontSize: 12 },
};
