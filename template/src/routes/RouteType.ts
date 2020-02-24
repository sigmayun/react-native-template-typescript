import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from 'src/routes/RootStackParamList'
import { RouteProp } from '@react-navigation/native'

type DetailsScreenNavigationProp<RouteName extends keyof RootStackParamList> = StackNavigationProp<RootStackParamList, RouteName>
type DetailsScreenRouteProp<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>

export type RouteType<RouteName extends keyof RootStackParamList> = {
  navigation: DetailsScreenNavigationProp<RouteName>
  route: DetailsScreenRouteProp<RouteName>
}
