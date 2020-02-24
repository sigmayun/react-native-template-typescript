import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import { RouteType } from 'src/routes/RouteType'

const DetailScreen: React.FC<RouteType<'DetailScreen'>> = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}> DetailScreen {route.params?.itemId}</Text>
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
