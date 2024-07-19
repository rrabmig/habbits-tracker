import { View, Text, SafeAreaView, Pressable, ScrollView } from "react-native";
import React from "react";
import { useGoodHabbits, useModals } from "@/store/store";
import TitleAndSettings from "@/components/Header/TitleAndSettings";
import HabbitCard from "@/components/HabbitCard/HabbitCard";
import AddHabbitModal from "@/components/Modals/AddHabbitModal";
import { Ionicons } from "@expo/vector-icons";
import HabbitCardList from "@/components/HabbitCardList/HabbitCardList";

const Good = () => {
  const setIsAddHabbitVisible = useModals(
    (state) => state.setIsAddHabbitVisible
  );
  const setAddHabbitType = useModals((state) => state.setAddHabbitType);

  return (
    <SafeAreaView className="h-full">
      <TitleAndSettings title="Good habbits" />
      <AddHabbitModal/>
      <ScrollView
        scrollEnabled={true}
      >
        <HabbitCardList type="good" />
      </ScrollView>
      <Pressable
        className="absolute bottom-5 right-5 bg-primary rounded-full"
        onPress={() => {
          setAddHabbitType("good");
          setIsAddHabbitVisible(true)
        }}
      >
        <Ionicons name="add-outline" size={48} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default Good;
