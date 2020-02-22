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
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>HomeScreen</Text>
    </View>
  )
}
HomeScreen.displayName = 'HomeScreen'

export default HomeScreen
