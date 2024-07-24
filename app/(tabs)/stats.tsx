import { View, Text, Button, Touchable, TouchableOpacity} from 'react-native'
import React from 'react'
import ScrollViewWithHeader from '@/components/ScrollViewWithStickyHeader/ScrollViewWithHeader'
import ChartSection from '@/components/StatsCharts/ChartSection'

const Stats = () => {
  return (
    <View className="h-full">
      <ScrollViewWithHeader title="Stats" type="stats">
      <View className="w-full h-fit flex-col justify-center items-center">
        <ChartSection />
      </View>
      </ScrollViewWithHeader>
    </View>
  )
}

export default Stats