import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Size, Sizes } from "../../common/sizes";

interface LabelProps {
  size?: Size;
  font?: string;
  color?: string;
}

export const LabelText = styled.Text<LabelProps>`
  font-family: ${props => props.font || "Inter_700Bold"};
  font-size: ${props => RFValue(props.size ? Sizes[props.size] : 24, 844)}px;
  color: ${props => props.color || "#342E37"};
`;
