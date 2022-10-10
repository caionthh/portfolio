import { Icon } from "../../components/icon";
import { Label } from "../../components/label";
import { AssetContainer, Container, LabelContainer, ValueLabelContainer } from "./style";

interface AssetCardProps {
  name: string;
  icon: string;
  dolarValue: number;
  assetAmmount: number;
  dolarAmmount: number;
  symbol: string;
}

export const AssetCard = ({ name, icon, dolarValue, dolarAmmount, assetAmmount, symbol }: AssetCardProps) => {

  return (
    <Container>
      <Icon src={icon} />
      <AssetContainer>
        <LabelContainer>
          <Label label={name || ""} size="l" />
          <Label label={`${assetAmmount || ""} ${symbol || ""}`} size="l" />
        </LabelContainer>
        <ValueLabelContainer>
          <Label label={`$${dolarValue || "0.00"}`} size="xs" />
          <Label label={`$${dolarAmmount || "0.00"}`} size="xs" />
        </ValueLabelContainer>
      </AssetContainer>

    </Container>
  )

}
