import { View, Text} from 'react-native'
import React from 'react'
import ScrollViewWithHeader from '@/components/ScrollViewWithStickyHeader/ScrollViewWithHeader'

const Stats = () => {
  return (
    <View className="h-full">
      <ScrollViewWithHeader title="Stats" type="stats">
      <View className="w-full h-full flex justify-center items-center">
        <Text>Stats</Text>
      </View>
      </ScrollViewWithHeader>
    </View>
  )
}

export default Stats