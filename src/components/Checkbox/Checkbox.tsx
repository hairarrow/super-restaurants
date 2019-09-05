import React, { FC, HTMLProps } from "react";
import StyledCheckbox from "./Checkbox.styled";

const Checkbox: FC<HTMLProps<HTMLInputElement>> = ({
	checked,
	label,
	onChange,
	style,
	className
}) => {
	const ID = Math.random()
		.toString(36)
		.substring(2);
	const id = `checkbox_${ID}`;

	return (
		<StyledCheckbox style={style} className={className}>
			<input id={id} type="checkbox" checked={checked} onChange={onChange} />
			<label htmlFor={id}>{label}</label>
		</StyledCheckbox>
	);
};

export default Checkbox;
