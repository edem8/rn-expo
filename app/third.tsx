import { View, Text, Pressable } from "react-native";
import React from "react";
import AppText from "@/components/AppText";
import Button from "@/components/Button";
import { Link } from "expo-router";

export default function Third() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText text="Index Screen" />

      {/* Push */}
      <Link href="/" asChild>
        <Pressable className="bg-red-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Push to Index
          </Text>
        </Pressable>
      </Link>

      {/* DismissTo */}
      <Link href="/" dismissTo asChild>
        <Pressable className="bg-red-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Dismiss to Index
          </Text>
        </Pressable>
      </Link>

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
