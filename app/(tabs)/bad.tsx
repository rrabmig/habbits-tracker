import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleAndSettings from "@/components/Header/TitleAndSettings";
import HabbitCardList from "@/components/HabbitCardList/HabbitCardList";
import Modal from "@/components/Modals/Modal";
import AddHabbitButton from "@/components/Buttons/AddHabbitButton";
import { useModals } from "@/store/store";

const Bad = () => {

  return (
    <SafeAreaView className="h-full">
      
      <TitleAndSettings title="Bad habbits" />
      <Modal />
      <ScrollView
        scrollEnabled={true}
      >
        <HabbitCardList type="bad" />
      </ScrollView>
      <AddHabbitButton type="bad"/>
    </SafeAreaView>
  );
};

export default Bad;
