export type InputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	'onChange'
> & {
	value: string;
	onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange, ...rest }) => {
	return (
		<input onChange={(e) => onChange(e.target.value)} value={value} {...rest} />
	);
};

export default Input;
