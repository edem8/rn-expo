import { AuthProvider } from "@/utils/authContext";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "../global.css";

export default function RootLayout() {
  const isloggedIn = false;

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Protected guard={isloggedIn}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>

        <Stack.Protected guard={!isloggedIn}>
          <Stack.Screen name="login" />
        </Stack.Protected>
      </Stack>
    </AuthProvider>
  );
}
