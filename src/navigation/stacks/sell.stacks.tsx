import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Sell } from "../../screens/Sell";

export const SellStack = createNativeStackNavigator();

export const SellStackNav = (props: any) => {
  return (
    <SellStack.Navigator
      initialRouteName="Sell"
      {...props}
      screenOptions={{
        headerShown: false,
      }}
    >
      <SellStack.Screen name="Sell">
        {(props) => <Sell {...props} />}
      </SellStack.Screen>
    </SellStack.Navigator>
  );
};
