import React from "react"
import { View, Text } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { ProgressArch } from "../../components/progress-bar/arch";
import { Header, HeaderCardsScroll } from "./style";
import { ProfileHeader } from "../../compositions/profile-header";
import { CardBase } from "../../components/cards";
import { CardHeader } from "../../components/cards/header";
import { Label } from "../../components/label";
import { CardBody } from "../../components/cards/body";
import theme from "../../global/light.theme";



export const HomeScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <ProfileHeader />
        <HeaderCardsScroll>
          <CardBase>
            <CardHeader>
              <Label
                label="Minha carteira"
                size="s"
                color={theme.colors.text_on_surface}
                font={theme.fonts.bold}
              />
            </CardHeader>
            <CardBody containerStyle={{ paddingLeft: 15 }}>
              <Label
                label="Saldo total"
                size="xs"
                color={theme.colors.text_on_surface}
                font={theme.fonts.semibold}
              />
              <Label
                label="R$ 219,75"
                size="xxl"
                color={theme.colors.text_on_surface}
                font={theme.fonts.black}
              />
              <Label
                label="/BRL"
                size="m"
                color={theme.colors.text_on_surface}
                font={theme.fonts.semibold}
              />
            </CardBody>
          </CardBase>

          <CardBase>

          </CardBase>
        </HeaderCardsScroll>
      </Header>


    </View>
  )
}
