import { Controller, FieldValues } from "react-hook-form";
import { IControlledInputProps } from "./interface";
import Input from ".";

const ControlledInputText = <TFieldValue extends FieldValues>(
  props: IControlledInputProps<TFieldValue>
) => {
  const { name, control, onKeyDown, ...rest } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState }) => (
        <Input
          {...rest}
         
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={(fieldState.error?.message || "").length > 0}
          helperText={fieldState.error?.message}
          
        />
      )}
    />
  );
};

export default ControlledInputText;
