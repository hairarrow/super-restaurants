import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	// uri: "/super-restaurants/us-central1/api/graphql"
	// Work around to make Storybook work
	// TODO Make this an env variable
	// uri: "http://localhost:5000/super-restaurants/us-central1/api/graphql"
	uri: "http://localhost:5000/super-restaurants/us-central1/api"
	// uri: "https://us-central1-super-restaurants.cloudfunctions.net/api"
});

export default client;
