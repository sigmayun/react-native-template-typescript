import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import getActiveRoute from './getActiveRoute'
import getScreenOptions from './getScreenOptions'
import { RootStackParamList } from './RootStackParamList'
import Icon from '~/iconfont/Icon'
import HomeScreen from '~/screens/HomeScreen'
import MineScreen from '~/screens/MineScreen'
import DetailScreen from '~/screens/DetailScreen'

type BottomTabParamList = {
  HomeStackScreen: undefined
  MineStackScreen: undefined
}

const RootStack = createStackNavigator<RootStackParamList>()
const BottomTab = createBottomTabNavigator<BottomTabParamList>()
const Stack = createStackNavigator()

const HomeStackScreen = () => {
  return (
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
      ref={navigationRef => {
        global.navigation = navigationRef
      }}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current
        const currentRoute = getActiveRoute(state)
        if (previousRouteName !== currentRoute.name) {
          console.log('[onStateChange]', currentRoute)
          // 动态设置 StatusBar
          // 接入APM系统
        }
        // Save the current route name for later comparision
        routeNameRef.current = currentRoute.name
      }}
    >
      <RootStack.Navigator screenOptions={getScreenOptions()}>
        <RootStack.Screen name="BottomTabScreen" component={BottomTabScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="DetailScreen" component={DetailScreen} options={{ headerTitle: '详情' }} />
        {/* Add other Screens */}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
