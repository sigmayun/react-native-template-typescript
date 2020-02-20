declare const global: {
  HermesInternal: null | {}
  windowWidth: number
  windowHeight: number
  ios: boolean
  android: boolean
  isIphoneX: () => boolean
  getStatusBarHeight: () => number
  getBottomSpace: () => number
}
