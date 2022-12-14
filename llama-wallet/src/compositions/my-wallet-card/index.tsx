import React from "react"
import { Dimensions } from "react-native"
import { CardBase } from "../../components/cards"
import { CardBody } from "../../components/cards/body"
import { CardHeader } from "../../components/cards/header"
import { Label } from "../../components/label"
import theme from "../../global/light.theme"

const { width } = Dimensions.get("window");

export const MyWalletCard = () => {

  return (
    <CardBase width={width * 0.9}>
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
  )
}
