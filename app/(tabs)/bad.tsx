import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleAndSettings from "@/components/Header/TitleAndSettings";
import { Ionicons } from "@expo/vector-icons";
import HabbitCard from "@/components/HabbitCard/HabbitCard";
import AddHabbitModal from "@/components/Modals/AddHabbitModal";

import { useBadHabbits } from "@/store/store";
import { useModals } from "@/store/store";

const Bad = () => {
  const setIsAddHabbitVisible = useModals(
    (state) => state.setIsAddHabbitVisible
  );

  const badHabbits = useBadHabbits((state) => state.badHabbits);

  return (
    <SafeAreaView className="h-full">
      <TitleAndSettings title="Bad habbits" />
      <AddHabbitModal type="bad"/>
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        scrollEnabled={true}
      >
        <View className="w-full h-full flex justify-start items-center px-4">
          {badHabbits.map((badHabbit) => (
            <HabbitCard key={badHabbit.id} habbit={badHabbit} />
          ))}
        </View>
      </ScrollView>
      <Pressable
        className="absolute bottom-5 right-5 bg-primary rounded-full"
        onPress={() => setIsAddHabbitVisible(true)}
      >
        <Ionicons name="add-outline" size={48} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default Bad;
