import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  WelcomeScreens,
  Signup,
  Signin,
  ResetPassword,
  OtpScreen,
  NewPassword,
} from "../../screens/Welcome";

export const WelcomeStack = createNativeStackNavigator();

export const WelcomeStackNav = (props: any) => {
  return (
    <WelcomeStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}
    >
      <WelcomeStack.Screen name="Welcome">
        {(props) => <WelcomeScreens {...props} />}
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name="Signup">
        {(props) => <Signup {...props} />}
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name="Signin">
        {(props) => <Signin {...props} />}
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name="ResetPassword">
        {(props) => <ResetPassword {...props} />}
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name="OtpScreen">
        {(props) => <OtpScreen {...props} />}
      </WelcomeStack.Screen>
      <WelcomeStack.Screen name="NewPassword">
        {(props) => <NewPassword {...props} />}
      </WelcomeStack.Screen>
    </WelcomeStack.Navigator>
  );
};
