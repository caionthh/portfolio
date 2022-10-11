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
    </CardBase>
  ))
