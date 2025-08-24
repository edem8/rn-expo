import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomeLayout() {
  return (
  <Stack>
    <Stack.Screen  name="index"  options={{title: "Home"}}/>
  </Stack>
  );
}
