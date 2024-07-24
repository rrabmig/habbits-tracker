import { Pressable, Text, View } from "react-native";
import { Redirect } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserInfo } from "@/store/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import Loader from "@/components/Loaders/Loader";

export default function WelcomePage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isWelcomed, setIsWelcomed] = useState<boolean>(false);

  AsyncStorage.getItem("isWelcomed").then((value) => {
    if (value === "true") {
      setIsWelcomed(true);
    } else {
      AsyncStorage.setItem("isWelcomed", "false");
    }
    setIsLoading(false);
  });

  function handleClick() {
    setIsWelcomed(true);
    AsyncStorage.setItem("isWelcomed", "true");
  }

  if (isWelcomed) {
    return <Redirect href={"/good"} />;
  }

  // todo: do a normal welcome page
  return (
    <SafeAreaView className="h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full flex justify-center items-center">
          <Text className="text-3xl">Welcome</Text>
          {isLoading ? (
            <Loader />
          ) : (
            <Pressable
              onPress={handleClick}
              className="bg-red-500 text-white p-2 rounded"
            >
              <Text>LOG IN (IN WORKING)</Text>
            </Pressable>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
