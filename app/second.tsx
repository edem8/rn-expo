import { View, Text, Pressable } from "react-native";
import React from "react";
import AppText from "@/components/AppText";
import Button from "@/components/Button";
import { Link, useLocalSearchParams } from "expo-router";

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

      <Text className="my-2 ">Hello {params.name}</Text>
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
