import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack, router, useNavigationContainerRef } from "expo-router";
export default function Layout() {
  return(
      <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false, animation: "fade" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: "fade", gestureEnabled: false }} />
    </Stack>
        </GestureHandlerRootView>);
}
