import { CardBase } from "../../components/cards"
import { CardBody } from "../../components/cards/body"
import { Label } from "../../components/label"
import theme from "../../global/light.theme"

interface ShorcutCardProps {
  offset?: number;
  icon?: React.ReactNode;
  label?: string;
  color?: string;
}

export const ShorcutCard = ({ offset, icon, label, color }: ShorcutCardProps) => {


  return (
    <CardBase
      width={120}
      proportion={1.4125}
      backgroundColor={color}
      horizontalMargin={8}
      style={{ marginLeft: offset }}
    >
      <CardBody>
        {icon}
        {label &&
          <Label
            label={label}
            font={theme.fonts.semibold}
            size="s"
            color={theme.colors.text_on_surface}
            style={{ marginTop: 8 }}
          />}
      </CardBody>
    </CardBase>
  )
}
