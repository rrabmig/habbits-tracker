import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Settings from '../Modals/Settings'
import { useModals } from '@/store/store'
interface ITitleAndSettings {
    title: string
}

const TitleAndSettings: React.FC<ITitleAndSettings> = ({title}) => {

    
    let isSettingsVisible = useModals(state => state.isSettingsVisible)
    let setIsSettingsVisible = useModals(state => state.setIsSettingsVisible)

  return (
    <>
    <View className='w-full flex-row justify-between items-center px-4 py-2'>
      <Text className='text-2xl'>{title}</Text>
      <TouchableOpacity onPress={() => setIsSettingsVisible(true)}>
        <Ionicons name={isSettingsVisible?"settings":"settings-outline"} size={24} color="black"/>
      </TouchableOpacity>
    </View>

    <Settings isSettingsVisible={isSettingsVisible} setIsSettingsVisible={setIsSettingsVisible}/>
    
    </>
    
  )
}

export default TitleAndSettings