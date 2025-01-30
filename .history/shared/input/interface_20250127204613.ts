import { Ionicons } from "@expo/vector-icons";

export type IInputProps = {
  name: string;
  placeholder: string;
  iconSize?: number;
  iconColor?: string;
  onBlur: () => void;
  onChange: (_value: string ) => void;
  value: string ;
  secureTextEntry?: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  keyboardType: string; 
};
