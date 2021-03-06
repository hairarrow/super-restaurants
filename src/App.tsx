import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./components/Theme";
import client from "./graphql/client";
import RestaurantView from "./views/Restaurant";
import ResultsView from "./views/Results";

const App: React.FC = () => (
	<Router>
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<Switch>
					<Route path="/" exact={true} component={ResultsView} />
					<Route path="/:id" component={RestaurantView} />
				</Switch>
			</ThemeProvider>
		</ApolloProvider>
	</Router>
);

export default App;
