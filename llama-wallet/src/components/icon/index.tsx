import { Image } from "react-native";
import { Container, ImageContainer } from "./style";

interface IconProps {
  src?: string;
  width?: number;
  height?: number;
}

export const Icon = ({ src, width, height }: IconProps) => {

  return (
    <Container width={width} height={height}>
      {src && <ImageContainer source={{ uri: src }} resizeMode="contain" />}
    </Container>
  )
}
