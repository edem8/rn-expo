import { Redirect, Stack } from "expo-router";
import React from "react";

export default function _layout() {

  const isLoggedIn = false // simulate a logged in user

  if (!isLoggedIn){
    return < Redirect  href={"/login"}/>
  }
  return (
    <React.Fragment>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </React.Fragment>
  );
}
