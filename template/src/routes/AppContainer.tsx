import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '../iconfont/Icon'
import { navigationRef } from './NavigationService'
import getActiveRouteName from './getActiveRouteName'
import getScreenOptions from './getScreenOptions'
import { RootStackParamList } from './RootStackParamList'
import HomeScreen from '../screens/HomeScreen'
import MineScreen from '../screens/MineScreen'
import DetailScreen from '../screens/DetailScreen'

type BottomTabParamList = {
  HomeStackScreen: undefined
  MineStackScreen: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()
const BottomTab = createBottomTabNavigator<BottomTabParamList>()
const Stack = createStackNavigator()

const HomeStackScreen = () => {
  return (
    // @ts-ignore
    <Stack.Navigator screenOptions={getScreenOptions()}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: '首页',
        }}
      />
    </Stack.Navigator>
  )
}

const MineStackScreen = () => {
  return (
    // @ts-ignore
    <Stack.Navigator screenOptions={getScreenOptions()}>
      <Stack.Screen
        name="MineScreen"
        component={MineScreen}
        options={{
          headerTitle: '我的',
        }}
      />
    </Stack.Navigator>
  )
}

const BottomTabScreen = () => (
  <BottomTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName
        if (route.name === 'HomeStackScreen') {
          iconName = focused ? 'shouye1' : 'shouye'
        } else if (route.name === 'MineStackScreen') {
          iconName = focused ? 'wode1' : 'wode'
        }
        return <Icon name={iconName} size={size} color={color} />
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <BottomTab.Screen name="HomeStackScreen" component={HomeStackScreen} options={{ tabBarLabel: '首页' }} />
    <BottomTab.Screen name="MineStackScreen" component={MineStackScreen} options={{ tabBarLabel: '我的' }} />
  </BottomTab.Navigator>
)

export default () => {
  const routeNameRef = React.useRef(null)
  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = getActiveRouteName(state)
        if (previousRouteName !== currentRouteName) {
          console.log('[onStateChange]', currentRouteName)
          // 动态设置 StatusBar
          // 接入APM系统
        }
        // Save the current route name for later comparision
        routeNameRef.current = currentRouteName
      }}
    >
      <RootStack.Navigator
        // @ts-ignore
        screenOptions={getScreenOptions()}
      >
        <RootStack.Screen name="BottomTabScreen" component={BottomTabScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="DetailScreen" component={DetailScreen} options={{ headerTitle: '详情' }} />
        {/* Add other Screens */}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
