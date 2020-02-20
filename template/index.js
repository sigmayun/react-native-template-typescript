/**
 * @format
 */

import { AppRegistry, Text, TextInput } from 'react-native'
import { configure } from 'mobx'
import './global'
import 'react-native-gesture-handler'
import App from './App'
import { name as appName } from './app.json'

// 设置 mobx 不允许在动作外部修改状态
configure({ enforceActions: 'observed' })
// 设置字体大小不随系统字体大小变化而变化
Text.defaultProps = { ...Text.defaultProps, allowFontScaling: false }
TextInput.defaultProps = { ...TextInput.defaultProps, allowFontScaling: false }

AppRegistry.registerComponent(appName, () => App)
