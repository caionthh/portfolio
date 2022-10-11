import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Dimensions } from "react-native";
import { CardScroller } from ".";
import { CenterView } from "../../components/storybook/storybook.centerview";

const { width } = Dimensions.get("window");


storiesOf("Cards Scroller", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () =>
    <CardScroller cardWidth={width * 0.8} cardMargin={10} />
  )
