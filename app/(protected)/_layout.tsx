import { AuthContext } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import React, { useContext } from "react";

export default function _layout() {
  const authContext = useContext(AuthContext);

  if (!authContext.isReady) {
    return null;
  }

  console.log("Ready:", authContext.isReady);
  console.log("LoggedIn: ", authContext.isLoggedIn);

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
