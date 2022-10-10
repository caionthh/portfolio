import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Size, Sizes } from "../../common/sizes";

interface LabelProps {
  size?: Size;
}

export const LabelText = styled.Text<LabelProps>`
  font-family: Inter_700Bold;
  font-size: ${props => RFValue(props.size ? Sizes[props.size] : 24, 844)}px;
  color: #342E37;
`;
