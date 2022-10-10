import { Size } from "../../common/sizes";
import { LabelText } from "./style";


interface LabelProps {
  label?: string;
  size?: Size;
  font?: string;
  style?: {};
}


export const Label = ({ label, style, ...rest }: LabelProps) => {

  return (
    <LabelText style={[style]} {...rest}>{label}</LabelText>
  )
}
