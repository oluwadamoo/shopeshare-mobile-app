import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabNav } from "../bottomtabs";
import { WelcomeStackNav } from "./welcome.stacks";

const EntryStackNav = createNativeStackNavigator();

export const EntryStack = () => {
  return (
    <EntryStackNav.Navigator
      initialRouteName="Index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <EntryStackNav.Screen
        name="Index"
        options={{
          animationTypeForReplace: "pop",
        }}
      >
        {(props) => <WelcomeStackNav {...props} />}
      </EntryStackNav.Screen>

      <EntryStackNav.Screen name="BottomTabs" component={BottomTabNav} />
    </EntryStackNav.Navigator>
  );
};
