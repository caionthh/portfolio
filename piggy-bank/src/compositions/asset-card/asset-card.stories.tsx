import { withKnobs, text, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { AssetCard } from ".";
import { CenterView } from "../../components/storybook/storybook.centerview";

export default {
  title: "Asset Card",
  decorators: [withKnobs]
}

const defaultBandeira = "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg"

storiesOf("Asset Card", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <AssetCard
      name={text("Name", "Real", "Asset")}
      icon={text("Icon URL", defaultBandeira, "Asset")}
      assetAmmount={number("Ammount", 219.75, {}, "Asset")}
      dolarAmmount={number("Dolar Ammount", 42.26, {}, "Asset")}
      dolarValue={number("Dolar Value", 0.19, {}, "Asset")}
      symbol={text("Symbol", "BRL", "Asset")} />
  ))
