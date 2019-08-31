import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import fetch from "cross-fetch";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import {
	introspectSchema,
	makeRemoteExecutableSchema,
	ApolloServer
} from "apollo-server-express";

async function proxy() {
	const app = express();
	const http = new HttpLink({
		uri: functions.config().yelp.host,
		fetch
	});
	const link = setContext(() => ({
		headers: {
			Authorization: `Bearer ${functions.config().yelp.secret}`
		}
	})).concat(http);
	const schema = await introspectSchema(link);
	const executableSchema = makeRemoteExecutableSchema({
		schema,
		link
	});
	const server = new ApolloServer({
		schema: executableSchema,
		playground: true,
		introspection: true
	});
	app.use(cors());
	server.applyMiddleware({ app, path: "*" });

	return app;
}

export const api = functions.https.onRequest(async (req, res) => {
	const server = await proxy();
	return server(req, res);
});
