import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationRef } from './NavigationService'
import getActiveRouteName from './getActiveRouteName'
import getScreenOptions from './getScreenOptions'
import { RootStackParamList } from './RootStackParamList'
import HomeScreen from '../screens/HomeScreen'

const RootStack = createStackNavigator<RootStackParamList>()

export default () => {
  const ref = React.useRef(null)
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = ref.current
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
