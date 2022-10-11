import { BottomTabButton } from "../bottom-tab-button"
import { Container } from "./style"
import WalletActiveSVG from "../../../assets/icons/wallet.svg"
import WalletInactiveSVG from "../../../assets/icons/wallet-inactive.svg";
import CoinActiveSVG from "../../../assets/icons/coin.svg";
import CoinInactiveSVG from "../../../assets/icons/coin-inactive.svg";
import ReceiptActiveSVG from "../../../assets/icons/receipts.svg";
import ReceiptInactiveSVG from "../../../assets/icons/receipts-inactive.svg";
import SettingActiveSVG from "../../../assets/icons/setting.svg";
import SettingInactiveSVG from "../../../assets/icons/setting-inactive.svg";
import theme from "../../../global/light.theme";


export const BottomTabBar = ({ state, descriptors, navigation }) => {

  const getWalletIcon = () => {
    if (state.index === 0)
      return <WalletActiveSVG fill={theme.colors.surface_primary} width={24} height={24} />
    else
      return <WalletInactiveSVG width={24} height={24} />
  }

  const getCoinIcon = () => {
    if (state.index === 1)
      return <CoinActiveSVG fill={theme.colors.surface_primary} width={24} height={24} />
    else
      return <CoinInactiveSVG width={24} height={24} />
  }

  const getNFTsIcon = () => {
    if (state.index === 2)
      return <ReceiptActiveSVG fill={theme.colors.surface_primary} width={24} height={24} />
    else
      return <ReceiptInactiveSVG width={24} height={24} />
  }

  const getMenuIcon = () => {
    if (state.index === 3)
      return <SettingActiveSVG fill={theme.colors.surface_primary} width={24} height={24} />
    else
      return <SettingInactiveSVG width={24} height={24} />
  }

  const onPress = (index: number) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index],
      canPreventDefault: true,
    });

    if (state.index !== index && !event.defaultPrevented)
      navigation.navigate({ name: state.routes[index].name, merge: true });
  }

  return (
    <Container>
      <BottomTabButton
        label={`Minha\nCarteira`}
        icon={getWalletIcon()}
        onPress={() => onPress(0)}
        isFocused={state.index === 0}
      />
      <BottomTabButton
        label={`Tokens`}
        icon={getCoinIcon()}
        onPress={() => onPress(1)}
        isFocused={state.index === 1}
      />
      <BottomTabButton
        label={`NFTs`}
        icon={getNFTsIcon()}
        onPress={() => onPress(2)}
        isFocused={state.index === 2}
      />
      <BottomTabButton
        label={`Menu`}
        icon={getMenuIcon()}
        onPress={() => onPress(3)}
        isFocused={state.index === 3}
      />
    </Container>
  )
}
