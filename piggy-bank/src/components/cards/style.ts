import styled from "styled-components/native";

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${props => props.backgroundColor || "#EF767A"};
  border-radius: 8px;
  padding: 10px 16px;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  marginBottom: 8px;
`;

export const BodyContainer = styled.View`
  width: 100 %;
`;
