import { HeaderContainer } from "../style";

interface CardHeaderProps {
  children?: React.ReactNode;
  headerStyle?: {}
}

export const CardHeader = ({ children, headerStyle }: CardHeaderProps) => {

  return (
    <HeaderContainer style={[headerStyle]}>
      {children}
    </HeaderContainer>
  )
}
