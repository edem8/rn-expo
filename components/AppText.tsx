import { View, Text } from 'react-native'
import React from 'react'

interface AppTextProps{
    text:string
}
export default function AppText({text}:AppTextProps) {
  return (
    <View>
      <Text className="font-semibold text-lg  tracking-wide">{text}</Text>
    </View>
  )
}