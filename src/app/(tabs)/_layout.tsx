import { Link ,Tabs} from "expo-router";
import React from "react";
import { Text, View, Platform, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function Page() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const isLargeScreen = screenWidth >= 768; // Large screen width threshold
  const isSmallScreen = screenHeight < 668;
  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
          screenOptions={{
            tabBarInactiveTintColor: "#AEAEB2",
            tabBarActiveTintColor: "red",
            tabBarLabelStyle: {
              color: "#AEAEB2",
            },
            tabBarStyle: {
              paddingBottom: isSmallScreen ? 10 : 10 + (Platform.OS === "ios" ? 32 : 0),
              paddingTop: 10,
              position: "absolute",
              minHeight: isSmallScreen ? 60 : Platform.OS === "ios" ? 100 : 65,
              borderTopWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
              backgroundColor: Platform.OS === "android" ? "#111111" : undefined,
            }
          }}
      >
        <Tabs.Screen
            name="(page1)/index"
            options={{
              lazy: true,
              headerShown: false,
              tabBarLabel: ({ focused }) => (
                  <Text
                      style={{ color: focused ? "#6D58F5" : "#AEAEB2" }}
                      className="text-xs font-medium md:text-xl"
                  >
                    sadasdas
                  </Text>
              ),

              tabBarIconStyle: { display: "flex", alignItems: "center", justifyContent: "center" },
              tabBarLabelStyle: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 2,
              },
              tabBarItemStyle: { flexDirection: "column" },
              title:"sdfsdf",
            }}
        />
        <Tabs.Screen
            name="(page2)/index"
            options={{
              lazy: true,

              tabBarLabel: ({ focused }) => (
                  <Text
                      style={{ color: focused ? "#6D58F5" : "#AEAEB2" }}
                      className="text-xs font-medium md:text-xl"
                  >
                    asdasdasd
                  </Text>
              ),
              headerShown: false,
              tabBarIconStyle: { display: "flex", alignItems: "center", justifyContent: "center" },
              tabBarLabelStyle: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 2,
              },
              tabBarItemStyle: { flexDirection: "column" },
              title: "sdfsdfsd"
            }}
        />
      </Tabs>
      </GestureHandlerRootView>
  );
}

function Content() {
  return (
      <View className="flex-1">
        <View className="py-12 md:py-24 lg:py-32 xl:py-48">
          <View className="px-4 md:px-6">
            <View className="flex flex-col items-center gap-4 text-center">
              <Text
                  role="heading"
                  className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Welcome to Project ACME
              </Text>
              <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
                Discover and collaborate on amce. Explore our services now.
              </Text>

              <View className="gap-4">
                <Link
                    suppressHighlighting
                    className="flex h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/"
                >
                  Explore
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
  );
}

function Header() {
  const { top } = useSafeAreaInsets();
  return (
      <View style={{ paddingTop: top }}>
        <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
          <Link className="font-bold flex-1 items-center justify-center" href="/">
            ACME
          </Link>
          <View className="flex flex-row gap-4 sm:gap-6">
            <Link
                className="text-md font-medium hover:underline web:underline-offset-4"
                href="/"
            >
              About
            </Link>
            <Link
                className="text-md font-medium hover:underline web:underline-offset-4"
                href="/"
            >
              Product
            </Link>
            <Link
                className="text-md font-medium hover:underline web:underline-offset-4"
                href="/"
            >
              Pricing
            </Link>
          </View>
        </View>
      </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
      <View
          className="flex shrink-0 bg-gray-100 native:hidden"
          style={{ paddingBottom: bottom }}
      >
        <View className="py-6 flex-1 items-start px-4 md:px-6 ">
          <Text className={"text-center text-gray-700"}>
            © {new Date().getFullYear()} Me
          </Text>
        </View>
      </View>
  );
}
