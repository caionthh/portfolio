import React from "react";
import { View } from "react-native";
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
}

const mockData: AssetData[] = [
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  },
  {
    name: "Real",
    icon: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg",
    assetAmmount: 219.75,
    dolarAmmount: 42.26,
    dolarValue: 0.19,
    symbol: "BRL"
  }
]

export const AssetCardList = () => {

  return (
    <ListView
      data={mockData}
      renderItem={(props) => {
        const { name, icon, assetAmmount, dolarAmmount, dolarValue, symbol }: AssetData = props.item;

        return (
          <AssetCard
            name={name}
            icon={icon}
            assetAmmount={assetAmmount}
            dolarAmmount={dolarAmmount}
            dolarValue={dolarValue}
            symbol={symbol}
          />
        )
      }}
      ItemSeparatorComponent={ListDivider}
    />
  )
}
