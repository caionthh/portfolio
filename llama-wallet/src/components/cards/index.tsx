import { Container } from "./style"


interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
  width?: number;
  proportion?: number;
  horizontalMargin?: number;
  style?: {}
}

export const CardBase = ({ children, style, ...rest }: CardProps) => {


  return (
    <Container style={[style]} {...rest}>
      {children}
    </Container>
  )

}
