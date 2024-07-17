import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

const TabsLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen name="good" options={{ title: 'Good' , headerShown: false}}/>
      <Tabs.Screen name="bad" options={{ title: 'Bad' , headerShown: false}}/>
      <Tabs.Screen 
        name="stats" 
        options={{ 
          title: 'Stats', 
          headerShown: false,
          tabBarIcon: ({color, focused}) => 
            <Ionicons 
              name={focused ? 'stats-chart' : 'stats-chart-outline'} 
              color={color} 
              size={24}
            />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout