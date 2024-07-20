import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleAndSettings from '@/components/Header/TitleAndSettings'
import HabbitCardList from '@/components/HabbitCardList/HabbitCardList'
import Modal from '@/components/Modals/Modal'
import AddHabbitButton from '@/components/Buttons/AddHabbitButton'

const Stats = () => {
  return (
    <SafeAreaView className="h-full">
      <TitleAndSettings title="Stats" />
      <Modal />
      <View className="w-full h-full flex justify-center items-center">
        <Text>Stats</Text>
      </View>
    </SafeAreaView>
  )
}

export default Stats