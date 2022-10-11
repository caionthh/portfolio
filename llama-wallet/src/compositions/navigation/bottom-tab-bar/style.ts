import styled from "styled-components/native";


export const Container = styled.View`
  width: 100%;
  height: 78px;

  flex-direction: row;
  justify-content: space-between;
  padding: 10px 40px;

  background-color: ${props => props.theme.colors.background}
`;
