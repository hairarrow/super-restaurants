import { useQuery } from "@apollo/react-hooks";
import React, { useCallback, useContext, useEffect, useState, FC } from "react";
import { searchQuery } from "../../graphql/queries/search";
import { search, searchVariables } from "../../graphql/queries/types/search";
import { SearchContext } from "../../views/Results";

const SearchResults: FC = () => {
	const { loading, error, data } = useQuery<search, searchVariables>(
		searchQuery,
		{ variables: { location: "Las Vegas" } }
	);
	console.log(loading, error, data);

	return <div>Search Results</div>;
};

export default SearchResults;
