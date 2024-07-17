import { Text, Touchable, View } from "react-native";
import {Redirect, router } from "expo-router";
import { Link, Router } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomePage() {
  //todo: use global state and local storage
  let isLoggedIn = true;
  if (isLoggedIn) {
    return (
      <Redirect href={'/good'}/>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Edit app/infefesfsfsSVFen.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  );
}
