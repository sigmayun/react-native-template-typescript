import React from 'react'
import { List } from '@ant-design/react-native'
import { RouteType } from '~/routes/RouteType'

const HomeScreen: React.FC<RouteType<'HomeScreen'>> = ({ route, navigation }) => {
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

export default HomeScreen
