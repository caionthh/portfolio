import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Icon } from ".";
import { CenterView } from "../storybook/storybook.centerview";

export default {
  title: "Icon",
  decorators: [withKnobs]
}

const defaultBandeira = "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiragrande.jpg"

storiesOf("Icon", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () => (
    <Icon src={text("Source", defaultBandeira)} />
  ))
