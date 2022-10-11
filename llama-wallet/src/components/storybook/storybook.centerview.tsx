import { View } from "react-native";

interface Props {
  children: React.ReactNode;
}

export const CenterView = ({ children }: Props) => <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>{children}</View>
