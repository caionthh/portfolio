import React from "react"
import { View, Dimensions } from "react-native"
import { Header } from "./style";
import { ProfileHeader } from "../../compositions/profile-header";
import theme from "../../global/light.theme";
import { CardScroller } from "../../compositions/card-scroller";
import { Section } from "../../compositions/section";
import { MyWalletCard } from "../../compositions/my-wallet-card";
import { ShorcutCard } from "../../compositions/shortcut-card";
import { AssetCardList } from "../../compositions/asset-card-list";
import SendSVG from "../../assets/icons/send-bold.svg";
import ReceiveSVG from "../../assets/icons/receive-bold.svg";
import SwapSVG from "../../assets/icons/swap-bold.svg";
import CartSVG from "../../assets/icons/cart-bold.svg";

const { width } = Dimensions.get("window");

export const HomeScreen = () => {

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <ProfileHeader />
        <CardScroller
          cardWidth={width * 0.9}
          cardMargin={5}
          style={{ marginTop: 40, marginBottom: 20 }}
        >
          <MyWalletCard />
          <MyWalletCard />
          <MyWalletCard />
        </CardScroller>
      </Header>

      <Section title="Para você">
        <CardScroller
          cardWidth={115}
          cardMargin={8}
          style={{ marginTop: 10, marginBottom: 0 }}
        >
          <ShorcutCard
            offset={16}
            icon={<SendSVG style={{ left: -5 }} width={27} height={27} fill="white" />}
            label="Enviar"
            color={theme.colors.card_surface_first}
          />
          <ShorcutCard
            icon={<ReceiveSVG width={27} height={27} fill="white" />}
            label="Receber"
            color={theme.colors.card_surface_second}
          />
          <ShorcutCard
            icon={<SwapSVG width={27} height={27} fill="white" />}
            label="Trocar"
            color={theme.colors.card_surface_third}
          />
          <ShorcutCard
            icon={<CartSVG width={27} height={27} fill="white" />}
            label="Comprar"
            color={theme.colors.card_surface_fourth}
          />
        </CardScroller>
      </Section>

      <Section
        style={{ flex: 1 }}
        title="Meu Portfolio">
        <AssetCardList />
      </Section>
    </View>
  )
}
