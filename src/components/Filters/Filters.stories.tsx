import { ApolloProvider } from "@apollo/react-hooks";
import centered from "@storybook/addon-centered/react";
import { storiesOf } from "@storybook/react";
import React from "react";
import client from "../../graphql/client";
import Filters from "./Filters";

const story = storiesOf("Filters", module);

story.addDecorator(centered).add("Default", () => (
	<ApolloProvider client={client}>
		<Filters />
	</ApolloProvider>
));
