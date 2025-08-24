import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function nested() {
  return (
    <View className="flex-1 items-center p-4 justify-center">
      <Text> Nested</Text>

      {/* Also Nested */}
      <Link href="/second/also-nested" push asChild>
        <Pressable className="bg-red-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Path to also nested
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
