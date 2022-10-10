import { Container } from "./style"


interface CardProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const CardBase = ({ children, ...rest }: CardProps) => {


  return (
    <Container {...rest}>
      {children}
    </Container>
  )

}
