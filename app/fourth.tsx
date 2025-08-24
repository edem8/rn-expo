import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function IndexScreen() {
  return (
    <View className="flex-1 items-center p-4 justify-center">
      <Text>fourth index</Text>
      {/* Replace */}
      <Link href="/second" replace asChild>
        <Pressable className="bg-red-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Replace with Second
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
