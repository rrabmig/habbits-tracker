
import React, { Component } from 'react'

import { ActivityIndicator, View } from 'react-native'

export const Loader = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
)

export default Loader