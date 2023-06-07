import * as SplashScreen from "expo-splash-screen";

import { Provider } from "react-redux";
import store from "./src/store/store";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { NavigationHandler } from "./src/navigation/handler";

const AppRoot = () => {
  const [fontsLoaded] = useFonts({
    "SpaceGrotesk-Bold": require("./src/assets/fonts/SpaceGrotesk-Bold.ttf"),
    "SpaceGrotesk-Light": require("./src/assets/fonts/SpaceGrotesk-Light.ttf"),
    "SpaceGrotesk-Medium": require("./src/assets/fonts/SpaceGrotesk-Medium.ttf"),
    "SpaceGrotesk-Regular": require("./src/assets/fonts/SpaceGrotesk-Regular.ttf"),
    "SpaceGrotesk-SemiBold": require("./src/assets/fonts/SpaceGrotesk-SemiBold.ttf"),
  });

  const loadAppData = async () => {
    // let user = await getData({ key: "@user" });
    // if (user) {
    //   user = JSON.parse(user);
    //   dispatch(updateUser(user));
    // }

    return true;
  };
  SplashScreen.preventAutoHideAsync();
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && (await loadAppData())) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationHandler onReady={onLayoutRootView} />;
};

export default function App() {
  return (
    <Provider store={store}>
      <AppRoot />
    </Provider>
  );
}
