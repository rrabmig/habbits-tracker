import { View, Text, Pressable, Modal, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Habbit, useBadHabbits, useGoodHabbits } from '@/store/store'
import { useModals } from '@/store/store'

interface IEditHabbitModal {
  closeModal: () => void
  visible: boolean
}


const EditHabbitModal: React.FC<IEditHabbitModal> = ({closeModal, visible}) => {
    
    return (
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View
          className="absolute h-full w-full bg-black/50 flex justify-center items-center px-2"
          onTouchStart={closeModal}
        >
          <View
            className="bg-white rounded-xl w-full min-h-[50%] flex items-center px-4"
            onTouchStart={closeModal}
          >
            <Text>Edit habbit</Text>
          </View>
        </View>
      </Modal>
    );
  };

export default EditHabbitModal