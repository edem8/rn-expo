import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import React, { useContext } from "react";

export default function _layout() {
  const authContext = useContext(AuthContext);

  console.log(authContext.isReady);
  console.log(authContext.isLoggedIn);
  if (!authContext.isReady) {
    return null;
  }

  if (!authContext.isLoggedIn) {
    return <Redirect href={"/login"} />;
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
