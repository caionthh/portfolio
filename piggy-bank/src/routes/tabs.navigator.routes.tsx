// import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/home";
import { StorybookScreen } from "../screens/storybook";
import { BottomTabBar } from "../compositions/navigation/bottom-tab-bar";

export type NavigatorParamList = {
  Storybook: undefined,
  Home: undefined;
  Tokens: undefined;
  NFTs: undefined;
  Settings: undefined;
}

const defaultRoute = "Home";

const options: BottomTabNavigationOptions = {
  headerShown: false,
}

export const Routes = () => {

  // const { Screen, Navigator } = createNativeStackNavigator<NativeStackParamList>();
  const { Screen, Navigator } = createBottomTabNavigator<NavigatorParamList>();

  return (
    <Navigator
      initialRouteName={defaultRoute}
      screenOptions={options}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Storybook" component={StorybookScreen} />
      <Screen name="Tokens" component={HomeScreen} />
      <Screen name="NFTs" component={HomeScreen} />
      <Screen name="Settings" component={HomeScreen} />

    </Navigator>
  )
}
