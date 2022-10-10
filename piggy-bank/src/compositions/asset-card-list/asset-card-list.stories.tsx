import { storiesOf } from "@storybook/react-native";
import React from "react";
import { AssetCardList } from ".";
import { CenterView } from "../../components/storybook/storybook.centerview";




storiesOf("Asset Card List", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <AssetCardList />
  ))
