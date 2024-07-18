import { View, Text, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import { Habbit, useBadHabbits } from "@/store/store";

interface IHabbitCard {
  habbit: Habbit;
}

const HabbitCard: React.FC<IHabbitCard> = ({ habbit }) => {
  const [longPress, setLongPress] = useState(false);

  const handleLongPress = () => {
    setLongPress(!longPress);
  };

  const increaseBadHabbitCount = useBadHabbits(
    (state) => state.increaseBadHabbitCount
  );
  const decreaseBadHabbitCount = useBadHabbits(
    (state) => state.decreaseBadHabbitCount
  );

  return (
    <View
      className={`w-full min-h-fit flex-row justify-between items-center border-b border-gray-300 py-4 px-4 ${
        longPress ? "bg-gray-300" : "bg-white"
      }`}
    >
      <View className="flex-col justify-between items-start">
        <Text className="text-xl">{habbit.title}</Text>
        <Text className="text-l w-70 pr-4">{habbit.description}</Text>
      </View>
      <View className="flex-col justify-between items-center">
        <Pressable onPress={() => increaseBadHabbitCount(habbit.id)}>
          <Ionicons name="chevron-up" size={24} color="black" />
        </Pressable>

        <Text className="text-xl">{habbit.count}</Text>

        <Pressable onPress={() => decreaseBadHabbitCount(habbit.id)}>
          <Ionicons name="chevron-down" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default HabbitCard;
