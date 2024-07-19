import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Habbit, useBadHabbits, useGoodHabbits } from "@/store/store";

interface IHabbitCard {
  habbit: Habbit;
  type: string;
}

const HabbitCard: React.FC<IHabbitCard> = ({ habbit, type }) => {
  const [longPress, setLongPress] = useState(false);
  const handleLongPress = () => {
    setLongPress(!longPress);
  };

  const increment =
    type === "bad"
      ? useBadHabbits((state) => state.increaseBadHabbitCount)
      : useGoodHabbits((state) => state.increaseGoodHabbitCount);
  const decrement =
    type === "bad"
      ? useBadHabbits((state) => state.decreaseBadHabbitCount)
      : useGoodHabbits((state) => state.decreaseGoodHabbitCount);
  const removeHabbit =
    type === "bad"
      ? useBadHabbits((state) => state.removeBadHabbit)
      : useGoodHabbits((state) => state.removeGoodHabbit);

  return (
    <TouchableOpacity onLongPress={handleLongPress} activeOpacity={0.6}>
      <View
        className={`w-full min-h-fit flex-row  my-1 justify-between items-center border-b border-gray-300 py-4 px-4 rounded-xl ${
          longPress ? "bg-gray-200" : "bg-white"
        }`}
      >
        <View className="flex-col justify-between items-start">
          <Text className="text-xl">{habbit.title}</Text>
          <Text className="text-l w-70 pr-4">{habbit.description}</Text>
        </View>
        {longPress ? (
          <Pressable onPress={() => removeHabbit(habbit.id)}>
            <Ionicons name="trash-outline" size={24} color="black" />
          </Pressable>
        ) : (
          <View className="flex-col justify-between items-center">
            <Pressable onPress={() => increment(habbit.id)}>
              <Ionicons name="chevron-up" size={24} color="black" />
            </Pressable>

            <Text className="text-xl">{habbit.count}</Text>

            <Pressable onPress={() => decrement(habbit.id)}>
              <Ionicons name="chevron-down" size={24} color="black" />
            </Pressable>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default HabbitCard;
