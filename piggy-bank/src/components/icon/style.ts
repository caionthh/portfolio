import styled from "styled-components/native";

interface ContainerProps {
  width?: number,
  height?: number,
}

export const Container = styled.View<ContainerProps>`
  width: ${props => props.width || 64}px;
  height: ${props => props.height || 64}px;
  border-radius: 32px;

  background-color: #fff;
`;

export const ImageContainer = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 32px;
`;
