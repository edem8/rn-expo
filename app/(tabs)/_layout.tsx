import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "teal"}}>
        <Tabs.Screen  name='index' options={{}} />
    </Tabs>
  )
}