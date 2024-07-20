import { View, Text } from 'react-native'
import React from 'react'
import { Habbit, useBadHabbits, useGoodHabbits } from '@/store/store'
import { Ionicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'
import { useModals } from '@/store/store'

interface IHabbitCardBackSide {
    type: string
    habbit: Habbit
  }

const HabbitCardBackSide: React.FC<IHabbitCardBackSide> = ({type, habbit}) => {

  const setModalType = useModals((state) => state.setModalType);
  const setIsCurrentHabbitBad = useModals((state) => state.setIsCurrentHabbitBad);

  const removeHabbit =
    type === "bad"
      ? useBadHabbits((state) => state.removeBadHabbit)
      : useGoodHabbits((state) => state.removeGoodHabbit);


  const setEditHabbitId = useModals((state) => state.setEditedHabbitId)

  const openEditHabbitModal = () => {
    setModalType("editHabbit");
    setIsCurrentHabbitBad(type === "bad");
    setEditHabbitId(habbit.id);
  }
  
    return (
    <View
        className="w-full h-fit flex-row  my-1 justify-between items-center border-b border-gray-300 py-4 px-4 rounded-xl bg-gray-100"
      >
        <View className="flex-col justify-between items-start">
          <Text className="text-xl">{habbit.title}</Text>
          <Text className="text-l w-70 pr-4">{habbit.description}</Text>
        </View>
        <View className="flex-row justify-between items-center w-[30%]">
          <Pressable onPress={openEditHabbitModal}>
              <Ionicons name="pencil" size={24} color="black" />
          </Pressable>
          <Pressable onPress={() => removeHabbit(habbit.id)}>
              <Ionicons name="trash-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>
  )
}

export default HabbitCardBackSide