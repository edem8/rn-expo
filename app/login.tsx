import { AuthContext } from "@/utils/authContext";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const authContext = useContext(AuthContext);

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text>Login Screen</Text>

      {/* Login */}
      <Pressable
        onPress={authContext.login}
        className="bg-pink-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">Login</Text>
      </Pressable>

      {/* Open Modal */}
      <Link href="/modal" push asChild>
        <Pressable className="bg-blue-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Go to Modal
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
