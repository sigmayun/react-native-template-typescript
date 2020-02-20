import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export type RootStackParamList = {
  HomeScreen: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()

export default () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
