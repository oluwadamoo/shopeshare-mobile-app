import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/Home";

export const HomeStack = createNativeStackNavigator();

export const HomeStackNav = (props: any) => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      {...props}
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home">
        {(props) => <Home {...props} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};
