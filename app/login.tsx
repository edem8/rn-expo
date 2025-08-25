import { useAuthStore } from "@/utils/authStore";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const { login, adminLogin } = useAuthStore();

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text>Login Screen</Text>

      {/* Login */}
      <Pressable
        onPress={login}
        className="bg-pink-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">Login</Text>
      </Pressable>

      {/* Admin Login */}
      <Pressable
        onPress={adminLogin}
        className="bg-pink-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">
          Admin Login
        </Text>
      </Pressable>

      {/* Open Modal */}
      <Link href="/modal" push asChild>
        <Pressable className="bg-gray-300 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Go to Modal (Disabled)
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
