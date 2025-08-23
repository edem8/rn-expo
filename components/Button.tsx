import { Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface ButtonProps {
  text: string;
  to: string;
}

export default function Button({ text, to }: ButtonProps) {
  return (
    <Link href={to} asChild>
      <Pressable className="bg-blue-500 mt-4 p-3 rounded">
        <Text className="text-white text-center">{text}</Text>
      </Pressable>
    </Link>
  );
}
