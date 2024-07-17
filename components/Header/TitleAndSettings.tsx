import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface ITitleAndSettings {
    title: string
}

const TitleAndSettings: React.FC<ITitleAndSettings> = ({title}) => {

    //todo: do it global
    let [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false)

  return (
    <>
    <View className='w-full flex-row justify-between items-center px-4 py-2'>
      <Text className='text-2xl'>{title}</Text>
      <TouchableOpacity onPress={() => setIsSettingsVisible(!isSettingsVisible)}>
        <Ionicons name={isSettingsVisible?"settings":"settings-outline"} size={24} color="black"/>
      </TouchableOpacity>
    </View>

    {isSettingsVisible &&
    <Modal 
        visible={isSettingsVisible} 
        animationType='fade'
        transparent={true}
        onRequestClose={() => {
            setIsSettingsVisible(false);
        }}
        
    >
        <View className='absolute h-full w-full bg-black/50 flex justify-center items-center px-2'>
            <View className='bg-white rounded-xl w-full min-h-[50%] flex items-center px-4'>
                <Text className='text-[30px]'>
                    настройки
                    <Pressable onPress={() => setIsSettingsVisible(false)}>
                        <Ionicons name="close-outline" size={24} color="black"/>
                    </Pressable>
                </Text>
            </View>
        </View>
    </Modal>
    }
    </>
    
  )
}

export default TitleAndSettings