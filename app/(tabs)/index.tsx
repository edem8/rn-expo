import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function index() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text>index</Text>

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
