import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Label } from ".";
import { CenterView } from "../storybook/storybook.centerview";



storiesOf("Label", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Label label="Bitcoin" size="xxl" />
  ))
