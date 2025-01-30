import { Ionicons } from "@expo/vector-icons";
import { KeyboardTypeOptions } from "react-native";
import { Control, FieldErrorsImpl, FieldValues, Path } from "react-hook-form";

export interface IBaseControlledField<TFieldValues extends FieldValues> {
  name: Path<TFieldValues>;
  control?: Control<TFieldValues>;
  errors?: Partial<FieldErrorsImpl<TFieldValues>>;
}

export type IInputProps = {
  name?: string;
  placeholder?: string;
  iconSize?: number;
  iconColor?: string;
  onBlur?: () => void;
  onChange?: (_value: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  iconName?: keyof typeof Ionicons.glyphMap;
  keyboardType?: KeyboardTypeOptions;
  error?: boolean;
  helperText: React.ReactNode;
};

export type IControlledInputProps<TFieldValues extends FieldValues> = Omit<
  IInputProps,
  "value" | "name"
> &
  IBaseControlledField<TFieldValues> & {
    name: string;
    // type?: "text" | "number" | "password" | "email" | "date" | "file";
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  };
