import React from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { ProgressArch } from "../../components/progress-bar/arch";



export const HomeScreen = () => {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ProgressArch
        width={256}
        progress={0.5}
      />
    </View>
  )
}
