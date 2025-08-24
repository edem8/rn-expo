import AppText from "@/components/AppText";
import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Second() {
  const params = useLocalSearchParams<{ name?: string }>();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText text="Index Screen" />

      <Text className="my-2 ">{params.name ? `Hello ${params.name}` : ""}</Text>
      {/* Third */}
      <Link href="/third" asChild>
        <Pressable className="bg-green-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Push to Third
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
