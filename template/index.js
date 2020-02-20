/**
 * @format
 */

import { AppRegistry } from 'react-native'
import { configure } from 'mobx'
import './global'
import 'react-native-gesture-handler'
import App from './App'
import { name as appName } from './app.json'

// 设置 mobx 不允许在动作外部修改状态
configure({ enforceActions: 'observed' })

AppRegistry.registerComponent(appName, () => App)
