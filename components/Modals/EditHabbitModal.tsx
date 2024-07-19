import { View, Text, Pressable, Modal, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Habbit, useBadHabbits, useGoodHabbits } from '@/store/store'
import { useModals } from '@/store/store'

interface IEditHabbitModal {
    
}


const EditHabbitModal = () => {

    const isEditHabbitVisible = useModals((state) => state.isEditHabbitVisible);
    const setIsEditHabbitVisible = useModals((state) => state.setIsEditHabbitVisible);
    
    return (
      <Modal
        visible={isEditHabbitVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setIsEditHabbitVisible(false);
        }}
      >
        <View
          className="absolute h-full w-full bg-black/50 flex justify-center items-center px-2"
          onTouchStart={() => setIsEditHabbitVisible(false)}
        >
          <View
            className="bg-white rounded-xl w-full min-h-[50%] flex items-center px-4"
            onTouchStart={(e) => e.stopPropagation()}
          >
            <Text>Edit habbit</Text>
          </View>
        </View>
      </Modal>
    );
  };

export default EditHabbitModal