import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './NavigationService'
import getActiveRouteName from './getActiveRouteName'
import getScreenOptions from './getScreenOptions'
import { RootStackParamList } from './RootStackParamList'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

const RootStack = createStackNavigator<RootStackParamList>()

export default () => {
  const routeNameRef = React.useRef()
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = getActiveRouteName(state)
        if (previousRouteName !== currentRouteName) {
          console.log('[onStateChange]', currentRouteName)
        }
      }}
    >
      <RootStack.Navigator
        // @ts-ignore
        screenOptions={getScreenOptions()}
      >
        <RootStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
