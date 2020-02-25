import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { RouteType } from '~/routes/RouteType'

type Props = RouteType<'DetailScreen'>

const DetailScreen: React.FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}> DetailScreen</Text>
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
