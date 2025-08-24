import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Modal, Pressable, Text, View } from "react-native";

export default function index() {
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const [ModalVisible, setModalVisible] = useState(false);
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
        className="bg-blue-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">Open Alert</Text>
      </Pressable>

      {/* Modal Open Button */}
      <Pressable
        onPress={() => {
          setModalVisible(true);
        }}
        className="bg-yellow-500 w-[80vw] mt-2 p-3 rounded"
      >
        <Text className="text-white font-semibold text-center">Open Modal</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        visible={ModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View className="flex-1 items-center justify-center">
          <View className="rounded-lg bg-white p-12">
            <Text>A custom Styled Modal</Text>
            <Pressable
              onPress={() => {
                setModalVisible(false);
              }}
              className="border border-gray-400 w-50 mt-2 p-3 rounded"
            >
              <Text className="text-gray-500 font-semibold text-center">
                Close Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
