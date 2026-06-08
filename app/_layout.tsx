import "../global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "outfit-regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-semiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "outfit-extraBold": require("../assets/fonts/Outfit-ExtraBold.ttf"),
    "playfairDisplay-regular": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    "playfairDisplay-medium": require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
    "playfairDisplay-semiBold": require("../assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    "playfairDisplay-bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
    "playfairDisplay-italic": require("../assets/fonts/PlayfairDisplay-Italic.ttf"),
    "playfairDisplay-extraBold": require("../assets/fonts/PlayfairDisplay-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
