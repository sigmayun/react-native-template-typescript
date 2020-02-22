import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { List } from '@ant-design/react-native'
import { RootStackParamList } from '../routes/RootStackParamList'

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>
type Props = {
  navigation: DetailsScreenNavigationProp
  route: DetailsScreenRouteProp
}

const HomeScreen: React.SFC<Props> = ({ route, navigation }) => {
  return (
    <List>
      <List.Item
        onPress={() => {
          navigation.navigate('DetailScreen')
        }}
        arrow="horizontal"
      >
        Go DetailScreen
      </List.Item>
    </List>
  )
}
HomeScreen.displayName = 'HomeScreen'

export default HomeScreen
