import ApolloClient from "apollo-boost";
require("dotenv").config();

const client = new ApolloClient({
	uri: process.env.API_HOST,
	headers: {
		authorization: `Bearer ${process.env.API_SECRET}`
	}
});

export default client;
