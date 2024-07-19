import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleAndSettings from "@/components/Header/TitleAndSettings";
import { Ionicons } from "@expo/vector-icons";
import AddHabbitModal from "@/components/Modals/AddHabbitModal";

import { useModals } from "@/store/store";
import HabbitCardList from "@/components/HabbitCardList/HabbitCardList";

const Bad = () => {
  const setIsAddHabbitVisible = useModals(
    (state) => state.setIsAddHabbitVisible
  );
  const setAddHabbitType = useModals((state) => state.setAddHabbitType);

  return (
    <SafeAreaView className="h-full">
      <TitleAndSettings title="Bad habbits" />
      <AddHabbitModal/>
      <ScrollView
        scrollEnabled={true}
      >
        <HabbitCardList type="bad" />
      </ScrollView>
      <Pressable
        className="absolute bottom-5 right-5 bg-primary rounded-full"
        onPress={() => {
          setIsAddHabbitVisible(true)
          setAddHabbitType("bad")
        }}
      >
        <Ionicons name="add-outline" size={48} color="black" />
      </Pressable>
    </SafeAreaView>
  );
};

export default Bad;
