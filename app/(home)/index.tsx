import { Link, useRouter } from "expo-router";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";

export default function index() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const handleOpenAlert = () => {
    Alert.alert("warning!", "Are you sure you want to proceed?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Confirm",
        style: "destructive",
        onPress: () => {
          console.log("let's go!");
        },
      },
    ]);
  };

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

      {/* Alert Button */}
      <Pressable
        onPress={handleOpenAlert}
        className="bg-pink-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">Open Alert</Text>
      </Pressable>
    </View>
  );
}
