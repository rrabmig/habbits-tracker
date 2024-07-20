import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HabbitCard from '../HabbitCard/HabbitCard'
import { useBadHabbits, useGoodHabbits } from '@/store/store'

interface IHabbitCardList {
    type: string
}

const HabbitCardList: React.FC<IHabbitCardList> = ({type}) => {
    const habbitsList = type === "good" ? useGoodHabbits((state) => state.goodHabbits) : useBadHabbits((state) => state.badHabbits);
  return (
    <ScrollView contentContainerStyle={{width: "100%", height: "100%", alignItems: "center", justifyContent: "flex-start", flexDirection: "column"}}
    >
          {habbitsList.map((habbit) => (
            <HabbitCard key={habbit.id} habbit={habbit} type={type}/>
          ))}
    </ScrollView>
  )
}

export default HabbitCardList