import { useQuery } from "@apollo/react-hooks";
import React, { useCallback, useContext, useEffect, FC } from "react";
import { searchQuery } from "../../graphql/queries/search";
import { search, searchVariables } from "../../graphql/queries/types/search";
import { SearchContext } from "../../views/Results";
import Restaurant from "../Restaurant";
import RestaurantList from "../Restaurant/RestaurantList";

const SearchResults: FC = () => {
	const {
		state: {
			results,
			price,
			selectedCategories,
			openNow: open_now,
			resultsInfo
		},
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
	const runDispatch = useCallback(() => {
		if (data && data.search && data.search.business) {
			dispatch(updateResults(data.search.business));
			dispatch(
				updateResultsInfo({
					total: data.search.total!,
					currentPage: resultsInfo!.currentPage
				})
			);
		}
	}, [data, resultsInfo, updateResults, updateResultsInfo, dispatch]);

	useEffect(runDispatch, [data]);

	if (error) return <h6 style={{ color: "#f00" }}>ERROR</h6>;
	if (loading) return <h1>Loading</h1>;

	return (
		<div>
			<h2>All Restaurants</h2>
			<RestaurantList>
				{results && results.length ? (
					results.map(
						(business) =>
							business && <Restaurant key={business.id!} {...business} />
					)
				) : (
					<h3>No Results</h3>
				)}
			</RestaurantList>
		</div>
	);
};

export default SearchResults;
