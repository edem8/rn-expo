import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function ProductDetail() {
  const params = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{JSON.stringify(params, null, "")}</Text>
    </View>
  );
}
