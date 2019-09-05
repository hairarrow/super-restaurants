import React, { FC } from "react";
import Filters from "../components/Checkbox/Filters";
import Container from "../components/Container";
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
			<Container style={{ paddingTop: 36, paddingBottom: 36, width: "100%" }}>
				<Header title="Restaurants">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</Header>
			</Container>
			<div
				style={{
					width: "100%",
					borderTop: "1px solid rgba(0, 0, 0, 0.2)",
					borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
					padding: 16
				}}
			>
				<Container>
					<Filters />
				</Container>
			</div>
			<Container style={{ paddingTop: 36, paddingBottom: 36, width: "100%" }}>
				<SearchResults />
			</Container>
		</main>
	</SearchContextProvider>
);

export default ResultsView;
