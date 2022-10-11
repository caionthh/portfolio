import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as  SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from "@expo-google-fonts/roboto";
import {
  Spartan_400Regular,
  Spartan_500Medium,
  Spartan_700Bold,
  Spartan_900Black
} from "@expo-google-fonts/spartan";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_900Black,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { ThemeProvider } from 'styled-components/native';
import LightTheme from "./src/global/light.theme";
import { Routes } from './src/routes/tabs.navigator.routes';
import { Provider } from 'react-redux';
import { store } from "./src/redux/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const activeTheme = LightTheme;

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    Spartan_400Regular,
    Spartan_500Medium,
    Spartan_700Bold,
    Spartan_900Black,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded])

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (appIsReady) {
        console.log("Hiding Splash")
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [appIsReady])

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
        <ThemeProvider theme={activeTheme}>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    </View>
  );
}
