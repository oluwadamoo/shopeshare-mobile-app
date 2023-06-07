import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile, ProfileDetails } from "../../screens/Profile";

export const ProfileStack = createNativeStackNavigator();

export const ProfileStackNav = (props: any) => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      {...props}
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="Profile">
        {(props) => <Profile {...props} />}
      </ProfileStack.Screen>
      <ProfileStack.Screen name="ProfileDetails">
        {(props) => <ProfileDetails {...props} />}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};
