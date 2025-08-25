import { useAuthStore } from "@/utils/authStore";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function settings() {
  const { logout } = useAuthStore();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>settings</Text>
      {/* Logout */}
      <Pressable
        onPress={logout}
        className="bg-pink-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">Logout</Text>
      </Pressable>
    </View>
  );
}
