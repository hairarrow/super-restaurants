import React, { useCallback, useContext, FC } from "react";
import { SearchContext } from "../../views/Results";
import Categories from "../Categories";
import Checkbox from "../Checkbox";
import Select from "../Select";

const Filters: FC = () => {
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
		<form
			onSubmit={preventSubmit}
			style={{ display: "flex", alignItems: "center" }}
		>
			<h1>Filter By:</h1>
			<Checkbox
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
		</form>
	);
};

export default Filters;
