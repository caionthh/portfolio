import { Size, Sizes } from "../../common/sizes";
import { Label } from "./style";



interface TitleProps {
  title?: string;
  size?: Size;
}

export const Title = ({ title, size }: TitleProps) => {

  return (
    <Label fontSize={size ? Sizes[size] : undefined}>{title}</Label>
  )
}
