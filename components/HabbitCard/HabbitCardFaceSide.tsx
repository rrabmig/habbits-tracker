import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Habbit, useBadHabbits, useGoodHabbits } from "@/store/store";

interface IHabbitCardFaceSide {
  type: string;
  habbit: Habbit;
}

const HabbitCardFaceSide: React.FC<IHabbitCardFaceSide> = ({
  type,
  habbit,
}) => {
  const increment =
    type === "bad"
      ? useBadHabbits((state) => state.increaseBadHabbitCount)
      : useGoodHabbits((state) => state.increaseGoodHabbitCount);
  const decrement =
    type === "bad"
      ? useBadHabbits((state) => state.decreaseBadHabbitCount)
      : useGoodHabbits((state) => state.decreaseGoodHabbitCount);

  return (
    <View className="w-full h-fit flex-row my-1 justify-between items-center border-b border-gray-300 py-4 px-4 rounded-xl bg-white">
      <View className="flex-col justify-between items-start">
        <Text className="text-xl">{habbit.title}</Text>
        <Text className="text-l w-70 pr-4">{habbit.description}</Text>
      </View>
      <View className="flex-col justify-between items-center">
        <Pressable onPress={() => increment(habbit.id)}>
          <Ionicons name="chevron-up" size={24} color="black" />
        </Pressable>

        <Text className="text-xl">{habbit.count}</Text>

        <Pressable onPress={() => decrement(habbit.id)}>
          <Ionicons name="chevron-down" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default HabbitCardFaceSide;
