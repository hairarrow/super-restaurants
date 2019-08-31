require("dotenv").config();

const { setContext } = require("apollo-link-context");
const { HttpLink } = require("apollo-link-http");
const {
	introspectSchema,
	makeRemoteExecutableSchema,
	ApolloServer
} = require("apollo-server-express");
const cors = require("cors");
const fetch = require("cross-fetch");
const express = require("express");

console.log("foobar");

async function config() {
	const app = express();
	const http = new HttpLink({
		uri: process.env.API_HOST,
		fetch
	});
	const link = setContext(() => ({
		headers: {
			Authorization: `Bearer ${process.env.API_SECRET}`
		}
	})).concat(http);
	const schema = await introspectSchema(link);
	const executableSchema = makeRemoteExecutableSchema({
		schema,
		link
	});
	const server = new ApolloServer({ schema: executableSchema });
	app.use(cors());
	server.applyMiddleware({ app });

	console.log(server.graphqlPath);
}

config();
