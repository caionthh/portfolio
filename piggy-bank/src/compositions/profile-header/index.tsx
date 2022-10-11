import { Icon } from "../../components/icon";
import { Label } from "../../components/label";
import theme from "../../global/light.theme";
import { Container, NameContainer } from "./style";
import { Button } from "../../components/button";
import NotificationSVG from "../../assets/icons/notification-inactive.svg";
import EyeSVG from "../../assets/icons/eye-inactive.svg";

export const ProfileHeader = () => {

  return (
    <Container>
      <NameContainer>
        <Label label="Bom dia" size="s" style={{ top: 8 }} font={theme.fonts.semibold} />
        <Label label="Caio" size="xl" style={{ left: 10 }} />
      </NameContainer>
      <Button icon={<EyeSVG width={24} height={24} />} />
      <Button icon={<NotificationSVG width={24} height={24} />} />
      <Icon width={48} height={48} src="https://www.github.com/caionthh.png" />
    </Container>
  )
}
