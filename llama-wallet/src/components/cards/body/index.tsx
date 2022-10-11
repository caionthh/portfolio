import React from "react"
import { BodyContainer } from "../style";


interface BodyProps {
  children: React.ReactNode;
  containerStyle?: {}
}

export const CardBody = ({ children, containerStyle }: BodyProps) => {


  return (
    <BodyContainer style={[containerStyle]}>
      {
        children
      }
    </BodyContainer>
  )
}
