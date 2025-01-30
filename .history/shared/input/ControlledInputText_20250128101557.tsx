import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/MaterialIcons"; // Example icon library

interface InputFieldProps {
  name: string;
  control: any;
  placeholder?: string;
  rules?: object;
  secureTextEntry?: boolean;
  style?: object;
  iconName?: string; // Add this for the icon
  iconSize?: number; // Optional: customize icon size
  iconColor?: string; // Optional: customize icon color
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  control,
  placeholder,
  rules = {},
  secureTextEntry = false,
  style = {},
  iconName,
  iconSize = 20,
  iconColor = "#666",
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <View style={[styles.inputContainer, error && styles.errorBorder]}>
            {iconName && (
              <Icon
                name={iconName}
                size={iconSize}
                color={iconColor}
                style={styles.icon}
              />
            )}
            <TextInput
              style={[styles.input, style]}
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};


const styles = 