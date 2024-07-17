import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleAndSettings from '@/components/Header/TitleAndSettings'

const Bad = () => {
  return (
    <SafeAreaView>
      <TitleAndSettings title="Bad habbits"/>
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className='w-full h-full flex justify-start items-center px-4'>
          

          <Text className='text-xl'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Al
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Bad