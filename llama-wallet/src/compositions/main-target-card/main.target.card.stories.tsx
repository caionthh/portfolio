import { color, number, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { MainTargetCard } from ".";
import { CenterView } from "../../components/storybook/storybook.centerview";

export default {
  title: "Main Target Card",
  decorators: [withKnobs]
}

storiesOf("Main Target Card", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("ContentOnly", () => (
    <MainTargetCard title={text("Target", "Objetivo")} />
  ))
