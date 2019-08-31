import React, { FC } from "react";
import Filters from "../components/Filters";
import Header from "../components/Header";

const ResultsView: FC = () => (
	<main>
		<Header title="Restaurants">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
		</Header>
		<Filters />
	</main>
);

export default ResultsView;
