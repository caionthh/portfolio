import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { StorybookScreen } from "../screens/storybook";

export type NativeStackParamList = {
  Storybook: undefined,
  Home: undefined;
}

const defaultRoute = "Storybook";

const options: NativeStackNavigationOptions = {
  headerShown: false,
}

export const Routes = () => {

  const { Screen, Navigator } = createNativeStackNavigator<NativeStackParamList>();

  return (
    <Navigator
      initialRouteName={defaultRoute}
      screenOptions={options} >
      <Screen name="Storybook" component={StorybookScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  )
}
