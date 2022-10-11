import { withKnobs, number, array, color } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import { ProgressArch } from ".";
import { CenterView } from "../../storybook/storybook.centerview";


export default {
  title: "Progress Arch",
  decorators: [withKnobs]
}

storiesOf("Progress Arch", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("default", () => (
    <ProgressArch
      width={number("Width", 128, {}, "Base")}
      progress={number("Progress", 0.5, { range: true, min: 0, max: 1, step: 0.005 }, "Base")}
      backgroundColor={[color("Start", "#49BEAA", "Background"), color("End", "#49DCB1", "Background")]}
      fillColor={[color("Start", "#456990", "Fill"), color("End", "#58789b", "Fill")]}
      stroke={number("Stroke", 10, {}, "Base")} />
  ))
