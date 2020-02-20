import { Dimensions, Platform } from 'react-native'
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'

global.windowWidth = Dimensions.get('window').width
global.windowHeight = Dimensions.get('window').height
global.ios = Platform.OS === 'ios'
global.android = Platform.OS === 'android'
global.isIphoneX = isIphoneX
global.getStatusBarHeight = getStatusBarHeight
global.getBottomSpace = getBottomSpace
