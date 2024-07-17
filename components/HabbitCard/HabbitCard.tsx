import { View, Text, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

interface IHabbitCard {
    title: string,
    description: string,
}

const HabbitCard: React.FC<IHabbitCard> = ({title, description}) => {
    const [count, setCount] = useState(0)
    const [longPress, setLongPress] = useState(false)

    const handleLongPress = () => {
        setLongPress(!longPress)
    }
  return (
    <View 
      className={`w-full min-h-fit flex-row justify-between items-center border-b border-gray-300 py-4 ${longPress? 'bg-gray-300' : 'bg-white'}`}
      >
            <View className='flex-col justify-between items-start'>
              <Text className='text-xl'>
                {title}
              </Text>
              <Text className='text-l w-70 pr-4'>
                {description}
              </Text>
            </View>
            <View className='flex-col justify-between items-center'>
                <Pressable onPress={() => setCount(count + 1)}>
                    <Ionicons name="chevron-up" size={24} color="black"/>
                </Pressable>
                
                <Text className='text-xl'>{count}</Text>

                <Pressable onPress={() => setCount(count - 1)}>
                    <Ionicons name="chevron-down" size={24} color="black"/>
                </Pressable>
            </View>
            
          </View>
  )
}

export default HabbitCard