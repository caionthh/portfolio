import { storiesOf } from "@storybook/react-native";
import { ProfileHeader } from ".";
import { CenterView } from "../../components/storybook/storybook.centerview";





storiesOf("Profile Header", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Default", () =>
    <ProfileHeader />
  )
