import * as functions from "firebase-functions";
import * as express from "express";
import fetch from "cross-fetch";
import { HttpLink } from "apollo-link-http";
import {
	introspectSchema,
	makeRemoteExecutableSchema,
	ApolloServer
} from "apollo-server-express";

async function proxy() {
	const app = express();
	const link = new HttpLink({
		uri: functions.config().yelp.host,
		headers: {
			Authorization: `Bearer ${functions.config().yelp.secret}`
		},
		fetch
	});
	let schema;
	try {
		schema = await introspectSchema(link);
	} catch (e) {
		console.error(e.result.errors);
		return e;
	}
	const executableSchema = makeRemoteExecutableSchema({
		schema,
		link
	});
	const server = new ApolloServer({
		schema: executableSchema
	});
	server.applyMiddleware({ app, path: "/", cors: true });

	return app;
}

export const api = functions.https.onRequest(async (req, res) => {
	const server = await proxy();
	if (!server) res.status(500);
	return server(req, res);
});
