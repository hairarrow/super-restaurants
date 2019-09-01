import React, { useCallback, FC } from "react";

interface ISelectOptions {
	value: string;
	label?: string;
}

export interface ISelectProps {
	options: ISelectOptions[];
	label?: string;
	onChange?(value: string): void;
}

const Select: FC<ISelectProps> = ({ label, options, onChange }) => {
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => {
			if (!onChange) return;
			onChange(e.currentTarget.value);
		},
		[onChange]
	);

	return (
		<label>
			{label}
			<select onChange={handleChange}>
				{options.map(({ value, label }) => (
					<option key={value}>{label ? label : value}</option>
				))}
			</select>
		</label>
	);
};

export default Select;
