import styled from "styled-components/native";

interface LabelProps {
  fontSize?: number;
  color?: string;
}

export const Label = styled.Text<LabelProps>`
  font-family: Spartan_700Bold;
  font-size: ${props => props.fontSize || 20}px;
  color: ${props => props.color || "#FFF"}
`;
