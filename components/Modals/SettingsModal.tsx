import { View, Text, Modal, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { useModals } from '@/store/store'
import { hardReset } from '@/data/hardReset'

interface ISettings {

}

const SettingsModal: React.FC<ISettings> = () => {

    const isSettingsVisible = useModals((state) => state.isSettingsVisible);
    const setIsSettingsVisible = useModals((state) => state.setIsSettingsVisible);

    const handleHardReset = () => {
        hardReset()
        .then(() => {
            console.log("Hard reset complete");
            setIsSettingsVisible(false);
        });
    }

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
            <Pressable
                className='absolute bottom-4 right-4 bg-red-500 rounded-full p-2'
                onPress={handleHardReset}
            >
                <Text className='text-[20px]'>
                    HARD RESET
                </Text>
            </Pressable>
        </View>
    </Modal>
  )
}

export default SettingsModal