import { useQuery } from "@apollo/react-hooks";
import React, { FC } from "react";
import { businessQuery } from "../graphql/queries/business";
import { businessVariables } from "../graphql/queries/types/Business";

const RestaurantView: FC<any> = ({ match }) => {
	const { loading, error, data } = useQuery<businessVariables>(businessQuery, {
		variables: { id: match.params.id }
	});

	if (loading) return <h1>Loading</h1>;
	if (error) return <h1 style={{ color: "#f00" }}>Error</h1>;

	return <h1>{JSON.stringify(data)}</h1>;
};

export default RestaurantView;
