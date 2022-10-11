import { Label } from "../../components/label";
import theme from "../../global/light.theme";
import { SectionContainer } from "./style";

interface SectionProps {
  title?: string;
  children?: React.ReactNode;
  style?: {}
}

export const Section = ({ title, style, children }: SectionProps) => {

  return (
    <SectionContainer style={[style]}>
      {title &&
        <Label
          label={title}
          size="m"
          font={theme.fonts.bold}
          style={{ marginLeft: 18 }} />}
      {children}
    </SectionContainer>
  )
}
