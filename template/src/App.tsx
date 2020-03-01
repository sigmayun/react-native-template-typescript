import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from '@ant-design/react-native'
import AppContainer from '~/routes/AppContainer'

const App = () => {
  return (
    <Provider>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <AppContainer />
    </Provider>
  )
}

export default App
