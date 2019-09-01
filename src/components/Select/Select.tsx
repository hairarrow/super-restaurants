import React, { FC } from "react";

interface ISelectOptions {
	value: string;
	label?: string;
}

export interface ISelectProps {
	label?: string;
	options: ISelectOptions[];
}

const Select: FC<ISelectProps> = ({ label, options }) => (
	<label>
		{label}
		<select>
			{options.map(({ value, label }) => (
				<option key={value}>{label ? label : value}</option>
			))}
		</select>
	</label>
);

export default Select;
