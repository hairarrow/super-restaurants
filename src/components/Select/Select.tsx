import React, { useCallback, useEffect, useState, FC, HTMLProps } from "react";
import Checkbox from "../Checkbox";
import StyledSelect from "./Select.styled";

export interface ISelectOptions {
	value: string;
	label?: string;
}

export interface ISelectProps {
	options: ISelectOptions[];
	onChange?(value: string): void;
}

const Select: FC<ISelectProps & HTMLProps<HTMLInputElement>> = ({
	label,
	options,
	onChange,
	value
}) => {
	const ID = Math.random()
		.toString(36)
		.substring(2);
	const id = `select_${ID}`;
	const [showOptions, setShowOptions] = useState(false);
	const [mouseIn, setMouseIn] = useState(false);
	const triggerChange = useCallback(
		(e) => {
			setShowOptions(false);
			if (!onChange) return;
			onChange(e);
		},
		[onChange, setShowOptions]
	);
	const handleMouseIn = useCallback(() => {
		setShowOptions(true);
		setMouseIn(true);
	}, [setMouseIn, setShowOptions]);
	const handleMouseOut = useCallback(() => setMouseIn(false), [setMouseIn]);
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLSelectElement>) => triggerChange(e.target.value),
		[triggerChange]
	);
	const handleSelect = useCallback((e) => triggerChange(e), [triggerChange]);

	useEffect(() => {
		const timer = setTimeout(() => setShowOptions(false), 1500);
		if (mouseIn) clearTimeout(timer);

		return () => clearTimeout(timer);
	}, [mouseIn, setShowOptions]);

	return (
		<StyledSelect
			className={showOptions ? "showing-options" : ""}
			onMouseEnter={handleMouseIn}
			onPointerEnter={handleMouseIn}
			onMouseLeave={handleMouseOut}
			onPointerLeave={handleMouseOut}
		>
			{label && <label htmlFor={id}>{label}</label>}
			<select onChange={handleChange} value={value}>
				{options.map(({ value: optionValue, label: optionLabel }) => (
					<option key={optionValue} value={optionValue}>
						{optionLabel ? optionLabel : optionValue}
					</option>
				))}
			</select>
			{showOptions && (
				<div className="select-options">
					{options.map(({ value: optionValue, label: optionLabel }) => (
						<Checkbox
							className="select-options__option"
							key={optionValue}
							label={optionLabel}
							checked={optionValue === value}
							onChange={() => handleSelect(optionValue)}
						/>
					))}
				</div>
			)}
		</StyledSelect>
	);
};

export default Select;
