export type IInputProps = {
  name: string;
  placeholder: string;
  iconSize?: number;
  iconColor?: string;
  onBlur: () => void;
  onChange: () => void;
  value: string | number;
  secureTextEntry?: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
};