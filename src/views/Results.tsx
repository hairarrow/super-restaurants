import React, { FC } from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";
import SearchResults from "../components/Search";
import { createSearchContext } from "../components/Search/SearchContext";
import SearchReducer, {
	initialState
} from "../components/Search/SearchReducer";

export const [SearchContext, SearchContextProvider] = createSearchContext(
	initialState,
	SearchReducer
);

const ResultsView: FC = () => (
	<SearchContextProvider>
		<main>
			<Header title="Restaurants">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</Header>
			<Filters />
			<SearchResults />
		</main>
	</SearchContextProvider>
);

export default ResultsView;
