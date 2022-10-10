import { color, number, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { CardBase } from ".";
import { ProgressArch } from "../progress-bar/arch";
import { CenterView } from "../storybook/storybook.centerview";
import { Container } from "./style";

export default {
  title: "Card",
  decorators: [withKnobs]
}

storiesOf("Card", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("ContentOnly", () => (
    <CardBase>
      <Container>
        <ProgressArch
          width={number("Width", 128, {}, "Base")}
          progress={number("Progress", 0.5, { range: true, min: 0, max: 1, step: 0.005 }, "Base")}
          backgroundColor={[color("Start", "#49BEAA", "Background"), color("End", "#49DCB1", "Background")]}
          fillColor={[color("Start", "#456990", "Fill"), color("End", "#58789b", "Fill")]}
          stroke={number("Stroke", 10, {}, "Base")} />
      </Container>
    </CardBase>
  ))
