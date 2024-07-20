import { View, Text, Modal, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { useBadHabbits, useGoodHabbits} from '@/store/store'
import { hardReset } from '@/data/hardReset'
import { TouchableOpacity } from 'react-native'

import { getBadHabbits, getGoodHabbits } from '@/data/LocalDatabase'

interface ISettings {
    closeModal: () => void
    visible: boolean
}

const SettingsModal: React.FC<ISettings> = ({closeModal, visible}) => {
    const setGoodHabbits = useGoodHabbits((state) => state.setGoodHabbits)
    const setBadHabbits = useBadHabbits((state) => state.setBadHabbits)

    const handleHardReset = () => {
        console.log("Hard resetting...");
        hardReset()
        .then(async () => {
            console.log("Hard reset complete");
            setGoodHabbits(await getGoodHabbits());
            setBadHabbits( await getBadHabbits());
        })
        .then(() => {
            closeModal();
        });
    }

  return (
    <Modal 
        visible={visible} 
        animationType='fade'
        transparent={true}
        onRequestClose={() => {
            closeModal();
        }}
        
    >
        <View 
            className='absolute h-full w-full bg-black/50 flex justify-center items-center px-2'
            onTouchStart={closeModal}
        >
            <View 
                className='bg-white rounded-xl w-full min-h-[50%] flex items-center px-4'
                onTouchStart={(e) => e.stopPropagation()}
            >
                <Text className='text-[30px]'>
                    Settings
                    <Pressable onPress={closeModal}>
                        <Ionicons name="close-outline" size={24} color="black"/>
                    </Pressable>
                </Text>
                <TouchableOpacity
                className='self-center bg-red-500 rounded-full p-2'
                onPress={handleHardReset}
                >
                    <Text className='text-[20px]'>
                        HARD RESET
                    </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    </Modal>
  )
}

export default SettingsModal