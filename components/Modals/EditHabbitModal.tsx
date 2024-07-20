import { View, Text, Pressable, Modal, TextInput } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { editedHabbitData, Habbit, useBadHabbits, useGoodHabbits } from "@/store/store";
import { useModals } from "@/store/store";
import { selectBadHabbitById, selectGoodHabbitById } from "@/data/LocalDatabase";
import Loader from "../Loaders/Loader";

interface IEditHabbitModal {
  closeModal: () => void;
  visible: boolean;
}

const EditHabbitModal: React.FC<IEditHabbitModal> = ({
  closeModal,
  visible,
}) => {
  
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const id = useModals((state) => state.editedHabbitId);
  const isCurrentHabbitBad = useModals((state) => state.isCurrentHabbitBad);

  const [editedData, setEditedData] = useState<editedHabbitData>({id, title: "", description: "", count: 0} as editedHabbitData);

  const oldHabbit = isCurrentHabbitBad? selectBadHabbitById(id) : selectGoodHabbitById(id)

  useEffect(() => {
    oldHabbit
    .then((habbit) => {
      setEditedData(habbit);
    })
    .then(() => setIsLoading(false))
  }, [])
  

  const editHabbit = isCurrentHabbitBad
    ? useBadHabbits((state) => state.editBadHabbit)
    : useGoodHabbits((state) => state.editGoodHabbit);
  
  const onSubmit = (): void => {
    if (editedData.title === "") return;
    if (Number.isNaN(editedData.count)) return;
    if (editedData.count < 0) return;

    setIsLoading(true);
    editHabbit(editedData);
    closeModal();
  }


  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={closeModal}
    >
      <View
        className="absolute h-full w-full bg-black/50 flex justify-center items-center px-2"
        onTouchStart={closeModal}
      >
        <View
          className="bg-white rounded-xl w-full min-h-[50%] flex items-center px-4"
          onTouchStart={(e) => e.stopPropagation()}
        >
          {isLoading 
          ? <Loader />
          :<>
          <Text>Edit habbit</Text>
          <View className="w-full h-fit flex justify-start items-start">
            <Text className="text-xl">Title</Text>
            <TextInput
              placeholder="Type new title"
              className="w-full rounded-xl bg-gray-50 p-2"
              onChangeText={(text) => setEditedData({ ...editedData, title: text })}
              value={editedData.title}
            />

            <Text className="text-xl">Description</Text>
            <TextInput
              placeholder="Type new description"
              className="w-full rounded-xl bg-gray-50 p-2"
              onChangeText={(text) => setEditedData({ ...editedData, description: text })}
              defaultValue={editedData.description}
            />

            <Text className="text-xl">Count</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="Type new count"
              className="w-full rounded-xl bg-gray-50 p-2"
              onChangeText={(text) => setEditedData({ ...editedData, count: Number(text) })}
              defaultValue={editedData.count.toString()}
            />

            <Pressable
              className="w-full bg-primary rounded-xl p-2"
              onPress={onSubmit}
            >
              <Text className="text-white text-center">Edit</Text>
            </Pressable>
          </View>
          </>}
          
        </View>
      </View>
    </Modal>
  );
};

export default EditHabbitModal;
