import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	// uri: "/super-restaurants/us-central1/api/graphql"
	// Work around to make Storybook work
	// TODO Make this an env variable
	uri: "http://localhost:5000/super-restaurants/us-central1/api/graphql"
});

export default client;
