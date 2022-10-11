import { Dimensions, ShadowPropTypesIOS } from "react-native";
import styled from "styled-components/native";

const { width } = Dimensions.get("window");
interface ContainerProps {
  backgroundColor?: string;
  width?: number;
  proportion?: number;
  horizontalMargin?: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${props => props.backgroundColor || "#EF767A"};
  border-radius: 8px;
  padding: 10px 16px;

  width: ${props => (props.width || (width * 0.8)) - 2 * (props.horizontalMargin || 10)}px;
  height: ${props => {
    if (props.width && props.proportion) {
      return props.width / props.proportion;
    }
    if (props.proportion) {
      return width / props.proportion;
    }
    return width / 2.6;
  }}px;

  margin: 0px ${props => props.horizontalMargin || 10}px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  marginBottom: 8px;
`;

export const BodyContainer = styled.View`
  width: 100 %;
`;
