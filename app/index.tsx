import { Pressable, Text, Touchable, View } from "react-native";
import {Redirect, router } from "expo-router";
import { Link, Router } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLoggedIn } from "@/store/store";

export default function WelcomePage() {
  //todo: use global state and local storage
  const isLoggedIn = useLoggedIn(state => state.isLoggedIn)
  const setIsLoggedIn = useLoggedIn(state => state.setIsLoggedIn)

  if (isLoggedIn) {
    return (
      <Redirect href={'/good'}/>
    )
  }

  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className="w-full h-full flex justify-center items-center">
          <Text>Welcome</Text>
          <Pressable
            onPress={() => setIsLoggedIn(true)}
            className="bg-red-500 text-white p-2 rounded"
          >
            <Text>
              LOG IN (IN WORKING)
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}
