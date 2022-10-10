import { Image } from "react-native";
import { Container, ImageContainer } from "./style";

interface IconProps {
  src?: string;
}

export const Icon = ({ src }: IconProps) => {

  return (
    <Container>
      {src && <ImageContainer source={{ uri: src }} resizeMode="contain" />}
    </Container>
  )
}
