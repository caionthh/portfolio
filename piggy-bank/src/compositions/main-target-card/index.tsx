import React from "react"
import { CardBase } from "../../components/cards"
import { CardBody } from "../../components/cards/body"
import { CardHeader } from "../../components/cards/header"
import { ProgressArch } from "../../components/progress-bar/arch"
import { Title } from "../../components/title"

interface TargetProps {
  title?: string;
}

export const MainTargetCard = ({ title }: TargetProps) => {


  return (
    <CardBase backgroundColor={"#456990"}>
      <CardHeader headerStyle={{ alignItems: "center" }}>
        <Title title={title} size="s" />
      </CardHeader>
      <CardBody containerStyle={{ alignItems: "center" }}>
        <>
          <ProgressArch
            width={160}
            progress={0.5}
            backgroundColor={["#FFF", "#F4F4F4"]}
            fillColor={["#49BEAA", "#49DCB1"]}
            stroke={16} />

        </>
      </CardBody>
    </CardBase>
  )
}
