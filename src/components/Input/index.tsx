import "./input.css";

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  value: string;
  onChange: (value: string) => void;
  label: string;
  isUpperCase?: boolean;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  isUpperCase = false,
  ...rest
}) => {
  return (
    <div className={"input-box"}>
      <input
        className={`${isUpperCase ? "is-uppercase" : ""}`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        {...rest}
      />
      <span>{label}</span>
    </div>
  );
};
export default Input;
