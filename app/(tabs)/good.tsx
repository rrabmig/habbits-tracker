import {ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import TitleAndSettings from "@/components/Header/TitleAndSettings";
import HabbitCardList from "@/components/HabbitCardList/HabbitCardList";
import Modal from "@/components/Modals/Modal";
import AddHabbitButton from "@/components/Buttons/AddHabbitButton";

const Good = () => {
  return (
    <SafeAreaView className="h-full">
      
      <TitleAndSettings title="Good habbits" />
      <Modal />
      <ScrollView
        scrollEnabled={true}
      >
        <HabbitCardList type="good" />
      </ScrollView>
      <AddHabbitButton type="good" />
    </SafeAreaView>
  );
};

export default Good;
