export type IInputProps = {
name: string;
placeholder: string;
iconSize?: number;
iconColor?: string;
onBlur:() => void;
onChange: () => void
value: string  |
secureTextEntry?:boolean
}