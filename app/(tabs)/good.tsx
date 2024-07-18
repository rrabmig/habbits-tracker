import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
import React from "react";
import { useGoodHabbits, useModals } from "@/store/store";
import TitleAndSettings from "@/components/Header/TitleAndSettings";
import HabbitCard from "@/components/HabbitCard/HabbitCard";
import AddHabbitModal from "@/components/Modals/AddHabbitModal";
import { Ionicons } from "@expo/vector-icons";

const Good = () => {
  const setIsAddHabbitVisible = useModals(
    (state) => state.setIsAddHabbitVisible
  );

  const goodHabbits = useGoodHabbits((state) => state.goodHabbits);

  return (
    <SafeAreaView className="h-full">
      <TitleAndSettings title="Good habbits" />
      <AddHabbitModal type="good" />
      <ScrollView
        contentContainerStyle={{ height: "100%" }}
        scrollEnabled={true}
      >
        <View className="w-full h-full flex justify-start items-center px-4">
          {goodHabbits.map((goodHabbit) => (
            <HabbitCard key={goodHabbit.id} habbit={goodHabbit} />
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

export default Good;
