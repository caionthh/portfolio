import styled from "styled-components/native";
import { StatusBar } from "react-native";


export const Header = styled.View`
  background-color: ${props => props.theme.colors.background};
  width: 100%;
  padding-top: ${(StatusBar.currentHeight || 0) + 12}px;
`;

export const HeaderCardsScroll = styled.ScrollView.attrs({
  horizontal: true
})`
  margin-top: 40px;
`;
