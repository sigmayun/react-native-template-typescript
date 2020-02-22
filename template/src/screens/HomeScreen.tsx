import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../routes/RootStackParamList'

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>
type Props = {
  navigation: DetailsScreenNavigationProp
  route: DetailsScreenRouteProp
}

const HomeScreen: React.SFC<Props> = ({ route, navigation }) => {
  console.log('[HomeScreen]', route, navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  )
}

export default HomeScreen
