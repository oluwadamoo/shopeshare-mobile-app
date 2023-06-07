import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image, ImageSourcePropType, Platform } from "react-native";
import { COLORS, FONTS, ICONS } from "../constants";
import { StyleSheet } from "react-native";
import { Home } from "../screens/Home";
import { SellStack, SellStackNav } from "./stacks/sell.stacks";
import { HomeStackNav } from "./stacks/home.stacks";
import { ProfileStackNav } from "./stacks/profile.stacks";

const BottomTabs = createBottomTabNavigator();

function TabBars({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={FONTS.text_400}>TAB BARS</Text>
    </View>
  );
}

interface TabItemProps {
  icon: ImageSourcePropType;
  label: string;
  focused: boolean;
}
function TabItem({ icon, label, focused }: TabItemProps) {
  return (
    <View style={styles.tab_container}>
      <Image
        source={icon}
        style={[
          styles.tab_icon,
          {
            tintColor: focused ? COLORS.primary : COLORS.gray,
          },
        ]}
      />
      <Text
        style={[
          FONTS.small_text,
          { color: focused ? COLORS.primary : COLORS.gray },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

export const BottomTabNav = (props: any) => {
  return (
    <BottomTabs.Navigator
      initialRouteName="HomeStack"
      {...props}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          ...styles.container,
        },
      }}
    >
      <BottomTabs.Screen
        name="HomeStack"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem icon={ICONS.home} label="Home" focused={focused} />
          ),
        }}
      >
        {(props) => <HomeStackNav {...props} />}
      </BottomTabs.Screen>
      <BottomTabs.Screen
        name="IntermediaryStack"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              icon={ICONS.intermediary}
              label="Intermediary"
              focused={focused}
            />
          ),
        }}
      >
        {(props) => <TabBars />}
      </BottomTabs.Screen>
      <BottomTabs.Screen
        name="SettingsStack"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem icon={ICONS.setting} label="Settings" focused={focused} />
          ),
        }}
      >
        {(props) => <TabBars />}
      </BottomTabs.Screen>
      <BottomTabs.Screen
        name="MyAccount"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              icon={ICONS.profile}
              label="My Account"
              focused={focused}
            />
          ),
        }}
      >
        {(props) => <ProfileStackNav {...props} />}
      </BottomTabs.Screen>
      <BottomTabs.Screen
        name="SellStack"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem icon={ICONS.tag} label="Sell" focused={focused} />
          ),
        }}
      >
        {(props) => <SellStackNav {...props} />}
      </BottomTabs.Screen>
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === "ios" ? 90 : 66,
  },
  tab_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  tab_icon: {
    height: 20,
    width: 20,
    marginBottom: 6,
  },
});
