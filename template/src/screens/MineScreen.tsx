import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RouteType } from '~/routes/RouteType'

type Props = RouteType<'MineScreen'>

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
