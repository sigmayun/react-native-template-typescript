import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../routes/RootStackParamList'

type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'DetailScreen'>
type DetailScreenRouteProp = RouteProp<RootStackParamList, 'DetailScreen'>
type Props = {
  navigation: DetailScreenNavigationProp
  route: DetailScreenRouteProp
}

const DetailScreen: React.SFC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}> DetailScreen </Text>
    </SafeAreaView>
  )
}

DetailScreen.displayName = 'DetailScreen'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
})

export default DetailScreen
