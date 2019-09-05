import { useQuery } from "@apollo/react-hooks";
import React, { useCallback, useContext, useEffect, useState } from "react";
import categoryQuery from "../../graphql/queries/categories";
import { Categories as TCategories } from "../../graphql/queries/types/Categories";
import { SearchContext } from "../../views/Results";
import Select from "../Select";

const Categories = () => {
	const {
		state: { categories: stateCategories, selectedCategories },
		actions: { updateCategories, updateSelectedCategories },
		dispatch
	} = useContext(SearchContext);
	const [categories, setCategories] = useState<any>([]);
	const { loading, error, data } = useQuery<TCategories>(categoryQuery);

	useEffect(() => {
		if (
			!stateCategories ||
			!stateCategories.categories ||
			!stateCategories.categories.category
		)
			return;
		const { category } = stateCategories.categories;
		const serializedCategories = [...category]
			.filter((cat) => {
				if (!cat || !cat.parent_categories) return false;

				return cat.parent_categories
					.map(
						(cat) =>
							cat && cat.alias && ["food", "restaurants"].includes(cat!.alias)
					)
					.some((cat) => cat);
			})
			.map((cat) => {
				if (!cat || !cat.alias || !cat.title) return { value: "", label: "" };

				return {
					value: cat.alias,
					label: cat.title
				};
			});

		setCategories(serializedCategories);
		// tslint:disable-next-line: align
	}, [stateCategories]);

	useEffect(() => {
		if (!data || !data.categories || categories.length) return;
		dispatch(updateCategories(data));
		// tslint:disable-next-line: align
	}, [data, dispatch, updateCategories, categories.length]);

	const handleChange = useCallback(
		(e) => {
			if (!selectedCategories) return;
			if (selectedCategories.length && selectedCategories.includes(e))
				dispatch(
					updateSelectedCategories(
						[...selectedCategories].filter((cat) => cat !== e)
					)
				);
			dispatch(updateSelectedCategories([...selectedCategories, e]));
		},
		[selectedCategories, dispatch, updateSelectedCategories]
	);

	if (error) return <h6 style={{ color: "#f00" }}>ERROR</h6>;
	if (loading) return <h6>Loading</h6>;

	return <Select options={categories} onChange={handleChange} />;
};

export default Categories;
