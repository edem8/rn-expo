import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  text: string;
}
export default function Button({ text }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity className="bg-blue-500 w-[70vw]  mt-2 p-3 rounded ">
        <Text className="text-white font-semibold text-center">{text}</Text>
      </TouchableOpacity>
    </View>
  );
}
