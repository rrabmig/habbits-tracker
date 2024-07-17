import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleAndSettings from '@/components/Header/TitleAndSettings'
import { Ionicons } from '@expo/vector-icons'
import HabbitCard from '@/components/HabbitCard/HabbitCard'
import { useState } from 'react'
import AddHabbit from '@/components/Modals/AddHabbit'

import { useBadHabbits } from '@/store/store'
import { useModals } from '@/store/store'

const Bad = () => {
  //todo: make it global
  const isAddHabbitVisible = useModals(state => state.isAddHabbitVisible)
  const setIsAddHabbitVisible = useModals(state => state.setIsAddHabbitVisible)

  const badHabbits = useBadHabbits(state => state.badHabbits)
  const addBadHabbit = useBadHabbits(state => state.addBadHabbit)
  const removeBadHabbit = useBadHabbits(state => state.removeBadHabbit)

  return (
    <SafeAreaView className="h-full">
      <TitleAndSettings title="Bad habbits"/>
      <AddHabbit type='bad' isAddHabbitVisible={isAddHabbitVisible} setIsAddHabbitVisible={setIsAddHabbitVisible}/>
      <ScrollView contentContainerStyle={{height: "100%"}} scrollEnabled={true} contentOffset={{y: 200, x: 200}}>
        <View className='w-full h-full flex justify-start items-center px-4'>
          {badHabbits.map((badHabbit) => (
            <HabbitCard 
              title={badHabbit.title} 
              description={badHabbit.description} 
              key={badHabbit.id}
            />
          ))}
        </View>
      </ScrollView>
      <Pressable 
        className='absolute bottom-5 right-5 bg-primary rounded-full'
        onPress={() => setIsAddHabbitVisible(true)}  
      >
        <Ionicons name="add-outline" size={48} color="black"/>
      </Pressable>
    </SafeAreaView>
  )
}

export default Bad