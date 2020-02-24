import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/routes/RootStackParamList'
import { RouteProp } from '@react-navigation/native'

type routeNameKeys = keyof RootStackParamList

type ScreenNavigationProp<RouteName extends routeNameKeys> = StackNavigationProp<RootStackParamList, RouteName>
type ScreenRouteProp<RouteName extends routeNameKeys> = RouteProp<RootStackParamList, RouteName>

export type RouteType<RouteName extends routeNameKeys> = {
  navigation: ScreenNavigationProp<RouteName>
  route: ScreenRouteProp<RouteName>
}
