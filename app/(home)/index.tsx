import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function index() {
  const router = useRouter();
  const canGoBack = router.canGoBack();

  return (
    <View className="flex-1 items-center p-4 justify-center">
      <Text>Home index</Text>

      {/* Path to nested */}
      <Link href="/nested" push asChild>
        <Pressable className="bg-red-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Path to Home nested
          </Text>
        </Pressable>
      </Link>

      {/* Back Button */}
      {canGoBack && (
        <Pressable
          onPress={() => {
            router.back();
          }}
          className="bg-pink-500 w-[80vw] mt-2 p-3 rounded"
        >
          <Text className="text-white font-semibold text-center">Back</Text>
        </Pressable>
      )}
    </View>
  );
}
