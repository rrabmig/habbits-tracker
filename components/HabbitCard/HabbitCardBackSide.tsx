import { View, Text } from 'react-native'
import React from 'react'
import { Habbit, useBadHabbits, useGoodHabbits } from '@/store/store'
import { Ionicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'

interface IHabbitCardBackSide {
    type: string
    habbit: Habbit
  }

const HabbitCardBackSide: React.FC<IHabbitCardBackSide> = ({type, habbit}) => {

  const removeHabbit =
    type === "bad"
      ? useBadHabbits((state) => state.removeBadHabbit)
      : useGoodHabbits((state) => state.removeGoodHabbit);
  
    return (
    <View
        className="w-full min-h-fit flex-row  my-1 justify-between items-center border-b border-gray-300 py-4 px-4 rounded-xl bg-gray-100"
      >
        <View className="flex-col justify-between items-start">
          <Text className="text-xl">{habbit.title}</Text>
          <Text className="text-l w-70 pr-4">{habbit.description}</Text>
        </View>
        <Pressable onPress={() => removeHabbit(habbit.id)}>
            <Ionicons name="trash-outline" size={24} color="black" />
        </Pressable>
      </View>
  )
}

export default HabbitCardBackSide