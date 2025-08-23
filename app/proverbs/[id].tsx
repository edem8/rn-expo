import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const proverbs = [
  {
    id: 0,
    proverb: "A journey of a thousand miles begins with a single step.",
    source: "Lao Tzu, Tao Te Ching",
  },
  {
    id: 1,
    proverb: "The early bird catches the worm.",
    source: "English Proverb",
  },
  {
    id: 2,
    proverb: "Actions speak louder than words.",
    source: "English Proverb",
  },
  {
    id: 3,
    proverb: "When in Rome, do as the Romans do.",
    source: "Saint Ambrose, De Officiis",
  },
  {
    id: 4,
    proverb: "You can't make an omelet without breaking a few eggs.",
    source: "French Proverb",
  },
];

export default function ProverbID() {
  const params = useLocalSearchParams<{ id: string }>();
  const proverb = proverbs.find((p) => p.id == parseInt(params.id));

  return (
    <View className="flex-1 items-center  justify-center">
      <Text>{proverb?.proverb}</Text>
      <Text>~{proverb?.source}</Text>
    </View>
  );
}
