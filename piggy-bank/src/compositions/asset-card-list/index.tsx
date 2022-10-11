import React from "react";
import { Dimensions, View } from "react-native";
import { ListDivider } from "../../components/list-divider";
import { AssetCard } from "../asset-card"
import { ListView } from "./style"

type AssetData = {
  name: string;
  icon: string;
  assetAmmount: number;
  dolarAmmount: number;
  dolarValue: number;
  symbol: string;
  variation: number;
}

const mockData: AssetData[] = [
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL",
    variation: 0.03,
  },
  {
    name: "Ethereum",
    icon: "https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo.png",
    assetAmmount: 0,
    dolarAmmount: 0,
    dolarValue: 1279.00,
    symbol: "ETH",
    variation: -3.37,
  },
  {
    name: "Dogecoin",
    icon: "https://upload.wikimedia.org/wikipedia/pt/d/d0/Dogecoin_Logo.png",
    assetAmmount: 0,
    dolarAmmount: 0,
    dolarValue: 0.05896,
    symbol: "Doge",
    variation: -5.29,
  },
  {
    name: "Ravencoin",
    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/2577.png",
    assetAmmount: 0,
    dolarAmmount: 0,
    dolarValue: 0.0322,
    symbol: "RVN",
    variation: -10.32,
  },
  {
    name: "Tether",
    icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",
    assetAmmount: 0,
    dolarAmmount: 0,
    dolarValue: 1,
    symbol: "USDT",
    variation: -0.02,
  },
  {
    name: "BNB",
    icon: "https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png",
    assetAmmount: 0,
    dolarAmmount: 0,
    dolarValue: 270.20,
    symbol: "BNB",
    variation: -2.92,
  },
]

export const AssetCardList = () => {

  return (
    <ListView
      data={mockData}
      renderItem={(props) => {
        const { name, icon, assetAmmount, dolarAmmount, dolarValue, symbol, variation }: AssetData = props.item;

        return (
          <AssetCard
            name={name}
            icon={icon}
            assetAmmount={assetAmmount}
            dolarAmmount={dolarAmmount}
            dolarValue={dolarValue}
            symbol={symbol}
            variation={variation}
          />
        )
      }}
    // ItemSeparatorComponent={ListDivider}
    />
  )
}
