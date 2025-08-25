import { useAuthStore } from "@/utils/authStore";
import { Tabs } from "expo-router";
import React from "react";

export default function _layout() {
  const { isAdmin } = useAuthStore();
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "teal" }}>
      <Tabs.Screen name="index" />
      <Tabs.Protected guard={isAdmin}>
        <Tabs.Screen name="admin" />
      </Tabs.Protected>
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
