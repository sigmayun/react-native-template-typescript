import React from 'react'
import { HeaderButtons as RNHeaderButtons, HeaderButton as RNHeaderButton, Item } from 'react-navigation-header-buttons'
import Icon from '../iconfont/Icon'

const HeaderButton = props => {
  return <RNHeaderButton {...props} IconComponent={Icon} iconSize={props.iconSize || 23} color={props.color || '#000000'} />
}

const HeaderButtons = props => {
  return <RNHeaderButtons HeaderButtonComponent={HeaderButton} {...props} />
}

HeaderButtons.Item = Item

export default HeaderButtons
