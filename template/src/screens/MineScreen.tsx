import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/RootStackParamList'

type MineScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MineScreen'>
type MineScreenRouteProp = RouteProp<RootStackParamList, 'MineScreen'>
type Props = {
  navigation: MineScreenNavigationProp
  route: MineScreenRouteProp
}

export default class MineScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}> MineScreen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})
