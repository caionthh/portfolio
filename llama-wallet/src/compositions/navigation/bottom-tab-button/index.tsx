import React from "react";
import { TouchableOpacity } from "react-native"
import { Icon } from "../../../components/icon"
import { Label } from "../../../components/label";
import theme from "../../../global/light.theme";


interface ButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
  isFocused?: boolean;
}

export const BottomTabButton = ({ label, icon, onPress, isFocused }: ButtonProps) => {


  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "flex-start",
        width: 64,
      }}
      onPress={onPress}
    >
      {icon}
      {label &&
        <Label
          label={label}
          size="xs"
          style={{
            textAlign: "center",
            color: isFocused ? theme.colors.surface_primary : theme.colors.text_on_background,
          }}
        />}
    </TouchableOpacity>
  )
}
