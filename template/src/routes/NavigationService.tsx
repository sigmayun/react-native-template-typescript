import React from 'react'
import { NavigationContainerRef } from '@react-navigation/native'

export const navigationRef = React.createRef<NavigationContainerRef>()

const navigate = (name: string, params: object) => {
  navigationRef.current && navigationRef.current.navigate(name, params)
}

const getNavigation = () => {
  return navigationRef.current && navigationRef.current
}

export default {
  navigate,
  getNavigation,
}
