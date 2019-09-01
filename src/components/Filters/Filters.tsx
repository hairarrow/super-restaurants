import React, { FC } from "react";
import Categories from "../Categories";
import Select from "../Select";

const Filters: FC = () => {
	const openNow = true;
	const priceOptions = ["$", "$$", "$$$", "$$$$"].map((value) => ({ value }));

	return (
		<form
			onSubmit={() => null}
			style={{ display: "flex", alignItems: "center" }}
		>
			<h1>Filter By:</h1>
			<label>
				<input type="checkbox" checked={openNow} />
				<span>Open Now</span>
			</label>

			<Select options={priceOptions} />
			<Categories />
		</form>
	);
};

export default Filters;
