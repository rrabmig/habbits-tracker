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
import FlipCard from 'react-native-flip-card';
import HabbitCardFaceSide from "./HabbitCardFaceSide";
import HabbitCardBackSide from "./HabbitCardBackSide";

interface IHabbitCard {
  habbit: Habbit;
  type: string;
}

const HabbitCard: React.FC<IHabbitCard> = ({ habbit, type }) => {
  const [longPress, setLongPress] = useState(false);
  const handleLongPress = () => {
    setLongPress(!longPress);
  };

  return (
    <TouchableOpacity onLongPress={handleLongPress} activeOpacity={0.6}>
      <FlipCard
        style={{ width: "100%", height: "100%" }}
        flipHorizontal={true}
        flipVertical={false}
        flip={longPress}
        perspective={1000}
        useNativeDriver={true}
        clickable={false}
      >
        <HabbitCardFaceSide type={type} habbit={habbit}/>
        <HabbitCardBackSide type={type} habbit={habbit}/>
      </FlipCard>
    </TouchableOpacity>
  );
};

export default HabbitCard;
