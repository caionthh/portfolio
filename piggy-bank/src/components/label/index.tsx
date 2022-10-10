import { Size } from "../../common/sizes";
import { LabelText } from "./style";


interface LabelProps {
  label?: string;
  size?: Size;
}


export const Label = ({ label, ...rest }: LabelProps) => {

  return (
    <LabelText {...rest}>{label}</LabelText>
  )
}
