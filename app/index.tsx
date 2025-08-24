import "../global.css";

import AppText from "@/components/AppText";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText text="Index Screen" />

      {/* second */}
      <Link href="/second" asChild>
        <Pressable className="bg-blue-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Push to Second
          </Text>
        </Pressable>
      </Link>

      {/* third */}
      <Link href="/second" asChild>
        <Pressable className="bg-blue-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Push to Third
          </Text>
        </Pressable>
      </Link>

      {/* naivagte with params */}
      <Link href={{ pathname: "/second", params: { name: "Edem" } }} asChild>
        <Pressable className="bg-green-500 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Greet Edem on Second
          </Text>
        </Pressable>
      </Link>

      {/* dynamic routes */}
      <Link href={{ pathname: "/proverbs/[id]", params: { id: "1" } }} asChild>
        <Pressable className="bg-gray-400 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Go to /proverbs/1
          </Text>
        </Pressable>
      </Link>

      {/* Nested dynamic routes */}
      <Link
        href={{
          pathname: "/products/[category]/[proudctId]",
          params: { category: "shoes", proudctId: "1" },
        }}
        asChild
      >
        <Pressable className="bg-red-400 w-[80vw] mt-2 p-3 rounded">
          <Text className="text-white font-semibold text-center">
            Go to products/shoes/2
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
