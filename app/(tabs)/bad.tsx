import {ScrollView, View} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleAndSettings from "@/components/Header/TitleAndSettings";
import HabbitCardList from "@/components/HabbitCardList/HabbitCardList";

import AddHabbitButton from "@/components/Buttons/AddHabbitButton";
import ScrollViewWithHeader from "@/components/ScrollViewWithStickyHeader/ScrollViewWithHeader";


const Bad = () => {
  return (
    <View className="h-full">
      <ScrollViewWithHeader title="Bad habbits" type="bad">
        <HabbitCardList type="bad" />
      </ScrollViewWithHeader>
      <AddHabbitButton type="bad" />
    </View>
  );
};

export default Bad;
