import { View, Text, Modal, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

interface ISettings {
    isSettingsVisible: boolean
    setIsSettingsVisible: (isSettingsVisible: boolean) => void
}

const Settings: React.FC<ISettings> = ({isSettingsVisible, setIsSettingsVisible}) => {
  return (
    <Modal 
        visible={isSettingsVisible} 
        animationType='fade'
        transparent={true}
        onRequestClose={() => {
            setIsSettingsVisible(false);
        }}
        
    >
        <View 
            className='absolute h-full w-full bg-black/50 flex justify-center items-center px-2'
            onTouchStart={() => setIsSettingsVisible(false)}
        >
            <View className='bg-white rounded-xl w-full min-h-[50%] flex items-center px-4'>
                <Text className='text-[30px]'>
                    Settings
                    <Pressable onPress={() => setIsSettingsVisible(false)}>
                        <Ionicons name="close-outline" size={24} color="black"/>
                    </Pressable>
                </Text>
            </View>
        </View>
    </Modal>
  )
}

export default Settings