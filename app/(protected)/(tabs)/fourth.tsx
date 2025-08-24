import { AuthContext } from "@/utils/authContext";
import { useRouter } from "expo-router";
import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

export default function IndexScreen() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const authContext = useContext(AuthContext);
  return (
    <View className="flex-1 items-center p-4 justify-center">
      <Text>fourth index</Text>

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

      {/* Logout Button */}

      <Pressable
        onPress={authContext.logout}
        className="bg-blue-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">Logout</Text>
      </Pressable>
    </View>
  );
}
