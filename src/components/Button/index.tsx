import "./index.css";

export enum ButtonColor {
  primary = "primary",
}

type ButtonProps = React.PropsWithChildren<{
  loading?: boolean;
  color?: ButtonColor;
  isUpperCase?: boolean;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  loading = false,
  color = ButtonColor.primary,
  isUpperCase = false,
  ...rest
}) => {
  return (
    <button
      className={`button button-color-${color} ${
        isUpperCase ? "is-uppercase" : ""
      }`}
      disabled={rest.disabled || loading}
      {...rest}
    >
      {loading && "Loading"}
      {children}
    </button>
  );
};

export default Button;
