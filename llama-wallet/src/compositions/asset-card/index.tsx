import React from "react";
import { View } from "react-native";
import { Icon } from "../../components/icon";
import { Label } from "../../components/label";
import theme from "../../global/light.theme";
import { AssetContainer, Container, LabelContainer, ValueLabelContainer } from "./style";

interface AssetCardProps {
  name: string;
  icon: string;
  dolarValue: number;
  assetAmmount: number;
  dolarAmmount: number;
  symbol: string;
  variation?: number;
}

export const AssetCard = ({ name, icon, dolarValue, dolarAmmount, assetAmmount, symbol, variation }: AssetCardProps) => {

  return (
    <Container>
      <Icon src={icon} />
      <AssetContainer>
        <LabelContainer>
          <Label label={name || ""} size="l" />
          <Label label={`${assetAmmount || "0"} ${symbol || ""}`} size="l" />
        </LabelContainer>
        <ValueLabelContainer>
          <View style={{ flexDirection: "row" }}>
            <Label label={`$${dolarValue || "0.0"}`} size="xs" />
            {variation && <Label label={`  ${variation < 0 ? "" : "+"}${variation || "0.0"}%`} size="xs" color={variation < 0 ? theme.colors.surface_primary : theme.colors.surface_detail_highlight} />}
          </View>
          <Label label={`$${dolarAmmount || "0.00"}`} size="xs" />
        </ValueLabelContainer>
      </AssetContainer>

    </Container>
  )

}
