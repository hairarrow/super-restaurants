import React, { useCallback, useContext, FC, HTMLProps } from "react";
import Checkbox from "..";
import { SearchContext } from "../../../views/Results";
import Categories from "../../Categories";
import Select from "../../Select";
import StyledFilters from "./Filters.styled";

const Filters: FC<HTMLProps<HTMLFormElement>> = ({ className }) => {
	const {
		state: { openNow, price },
		actions: { updateOpen, updatePrice },
		dispatch
	} = useContext(SearchContext);
	const priceOptions = [
		{ value: "", label: "Any" },
		{ value: "1", label: "$" },
		{ value: "2", label: "$$" },
		{ value: "3", label: "$$$" },
		{ value: "4", label: "$$$$" }
	];
	const preventSubmit = useCallback((e) => e.preventDefault(), []);
	const handleToggleOpen = useCallback(() => dispatch(updateOpen(!openNow)), [
		openNow,
		updateOpen,
		dispatch
	]);
	const handleSelectPrice = useCallback((e) => dispatch(updatePrice(e)), [
		price,
		updatePrice,
		dispatch
	]);

	return (
		<StyledFilters
			className={className}
			onSubmit={preventSubmit}
			style={{ display: "flex", alignItems: "center" }}
		>
			<label className="filters-title">Filter By:</label>
			<Checkbox
				className="filters-open"
				label="Open Now"
				checked={openNow}
				onChange={handleToggleOpen}
			/>
			<Select
				value={price}
				options={priceOptions}
				onChange={handleSelectPrice}
			/>
			<Categories />
		</StyledFilters>
	);
};

export default Filters;
