import { Stack } from "expo-router";
import React from "react";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { WSProvider } from "../service/WSProvider";
const Layout = () => {
  return (
    <WSProvider>
      <Stack screenOptions={{ headerShown: false,animation:'slide_from_right' }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="role" />
      </Stack>
    </WSProvider>
  );
};

export default gestureHandlerRootHOC(Layout);
