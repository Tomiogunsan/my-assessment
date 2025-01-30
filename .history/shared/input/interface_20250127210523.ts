import { Ionicons } from "@expo/vector-icons";
import { KeyboardTypeOptions } from "react-native";

export interface IBaseControlledField<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control?: Control<TFieldValues>;
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
}

export type IInputProps = {
  name: string;
  placeholder: string;
  iconSize?: number;
  iconColor?: string;
  onBlur: () => void;
  onChange: (_value: string) => void;
  value: string;
  secureTextEntry?: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  keyboardType: KeyboardTypeOptions;
};
