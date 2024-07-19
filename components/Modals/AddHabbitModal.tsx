import { View, Text, Modal, Pressable, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useBadHabbits, useGoodHabbits } from "@/store/store";
import { useState } from "react";
import { useModals } from "@/store/store";

interface IAddHabbit {
}

const AddHabbitModal: React.FC<IAddHabbit> = () => {
  
  const isAddHabbitVisible = useModals((state) => state.isAddHabbitVisible);
  const type = useModals((state) => state.AddHabbitType);

  const setIsAddHabbitVisible = useModals(
    (state) => state.setIsAddHabbitVisible
  );

  const addHabbit =
    type === "bad"
      ? useBadHabbits((state) => state.addBadHabbit)
      : useGoodHabbits((state) => state.addGoodHabbit);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onSubmit = (): void => {
    if (title === "") return;
    addHabbit({
      id: Date.now(),
      title: title,
      description: description,
      type: "count",
      count: 0,
      date: new Date().toISOString(),
      changes: [],
    });

    setIsAddHabbitVisible(false);
    setTitle("");
    setDescription("");
  };

  return (
    <Modal
      visible={isAddHabbitVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        setIsAddHabbitVisible(false);
      }}
    >
      <View
        className="absolute h-full w-full bg-black/50 flex justify-center items-center px-2"
        onTouchStart={() => setIsAddHabbitVisible(false)}
      >
        <View
          className="bg-white rounded-xl w-full min-h-[50%] flex items-center px-4"
          onTouchStart={(e) => e.stopPropagation()}
        >
          <Pressable
            className="absolute top-2 right-2"
            onPress={() => setIsAddHabbitVisible(false)}
          >
            <Ionicons name="close-outline" size={24} color="black" />
          </Pressable>
          <Text className="text-[30px]">Add new {type} Habbit</Text>
          <View className="w-full h-fit flex justify-start items-start">
            <Text className="text-xl">Title</Text>
            <TextInput
              placeholder="Title"
              className="w-full rounded-xl bg-gray-50 p-2"
              onChangeText={(text) => setTitle(text)}
            />

            <Text className="text-xl">Description</Text>
            <TextInput
              placeholder="Description"
              className="w-full rounded-xl bg-gray-50 p-2"
              onChangeText={(text) => setDescription(text)}
            />

            <Pressable
              className="w-full bg-primary rounded-xl p-2"
              onPress={() => onSubmit()}
            >
              <Text className="text-white text-center">Add</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddHabbitModal;
