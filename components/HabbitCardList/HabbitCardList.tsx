import { View, Text } from 'react-native'
import React from 'react'
import HabbitCard from '../HabbitCard/HabbitCard'
import { useBadHabbits, useGoodHabbits } from '@/store/store'

interface IHabbitCardList {
    type: string
}

const HabbitCardList: React.FC<IHabbitCardList> = ({type}) => {
    const habbitsList = type === "good" ? useGoodHabbits((state) => state.goodHabbits) : useBadHabbits((state) => state.badHabbits);

  return (
    <View className="w-full h-full flex justify-start items-center px-4">
          {habbitsList.map((Habbit) => (
            <HabbitCard key={Habbit.id} habbit={Habbit} type={type}/>
          ))}
    </View>
  )
}

export default HabbitCardList