import { ButtonBase } from "./style"

interface ButtonProps {
  icon?: React.ReactNode;
  style?: {};
}

export const Button = ({ icon, style }: ButtonProps) => {

  return (
    <ButtonBase style={[style]}>
      {icon}
    </ButtonBase>

  )
}
