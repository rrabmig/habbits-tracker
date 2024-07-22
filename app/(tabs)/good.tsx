import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import HabbitCardList from "@/components/HabbitCardList/HabbitCardList";
import AddHabbitButton from "@/components/Buttons/AddHabbitButton";
import ScrollViewWithHeader from "@/components/ScrollViewWithStickyHeader/ScrollViewWithHeader";

const Good = () => {
  return (
    <View className="h-full">
      <ScrollViewWithHeader title="Good habbits" type="good">
        <HabbitCardList type="good" />
      </ScrollViewWithHeader>
      <AddHabbitButton type="good" />
    </View>
  );
};

export default Good;
