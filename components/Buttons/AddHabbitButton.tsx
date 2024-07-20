import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useModals } from "@/store/store";

interface IAddHabbitButton {
  type: string;
}

const AddHabbitButton: React.FC<IAddHabbitButton> = ({ type }) => {
  const setModalType = useModals((state) => state.setModalType);
  const setIsCurrentHabbitBad = useModals(
    (state) => state.setIsCurrentHabbitBad
  );

  const openAddHabbitModal = () => {
    setModalType("addHabbit");
    setIsCurrentHabbitBad(type === "bad");
  };
  return (
    <Pressable
      className="absolute bottom-5 right-5 bg-primary rounded-full"
      onPress={openAddHabbitModal}
    >
      <Ionicons name="add-outline" size={44} color="black" />
    </Pressable>
  );
};

export default AddHabbitButton;
