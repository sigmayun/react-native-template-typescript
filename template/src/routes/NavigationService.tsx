/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
import React from 'react'
import { NavigationContainerRef } from '@react-navigation/native'

export let navigationRef = React.createRef<NavigationContainerRef>()

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
