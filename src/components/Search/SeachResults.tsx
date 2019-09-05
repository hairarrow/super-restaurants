import { useQuery } from "@apollo/react-hooks";
import React, { useCallback, useContext, useEffect, useState, FC } from "react";
import { searchQuery } from "../../graphql/queries/search";
import { search, searchVariables } from "../../graphql/queries/types/search";
import { SearchContext } from "../../views/Results";
import Restaurant from "../Restaurant";

const SearchResults: FC = () => {
	const {
		state: { results, price, selectedCategories, openNow: open_now },
		actions: { updateResults, updateResultsInfo },
		dispatch
	} = useContext(SearchContext);
	const { loading, error, data } = useQuery<search, searchVariables>(
		searchQuery,
		{
			variables: {
				location: "Las Vegas",
				categories: selectedCategories ? selectedCategories.join(",") : "",
				price,
				open_now
			}
		}
	);

	useEffect(() => {
		if (data && data.search && data.search.business)
			dispatch(updateResults(data.search.business));
	}, [data]);

	if (loading) return <h1>Loading</h1>;

	return (
		<div>
			<h2>All Restaurants</h2>
			<section>
				{results &&
					results.length &&
					results.map(
						(business) =>
							business && <Restaurant key={business.id!} {...business} />
					)}
			</section>
		</div>
	);
};

export default SearchResults;
