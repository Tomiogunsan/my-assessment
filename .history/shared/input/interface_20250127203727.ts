import { Ionicons } from "@expo/vector-icons";

export type IInputProps = {
  name: string;
  placeholder: string;
  iconSize?: number;
  iconColor?: string;
  onBlur: () => void;
  onChange: (_t) => void;
  value: string | number;
  secureTextEntry?: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
};