import { useQuery } from "@apollo/react-hooks";
import React, { FC } from "react";
import { oc } from "ts-optchain";
import RestaurantDetail from "../components/Restaurant/RestaurantDetail";
import { businessQuery } from "../graphql/queries/business";
import { business, businessVariables } from "../graphql/queries/types/business";

const RestaurantView: FC<any> = ({ match }) => {
	const { loading, error, data } = useQuery<business, businessVariables>(
		businessQuery,
		{
			variables: { id: match.params.id }
		}
	);

	if (loading) return <h1 style={{ padding: 24 }}>Loading</h1>;

	const dataChain = oc(data);
	const businessData = dataChain();
	if (error || !data || !businessData)
		return <h1 style={{ color: "#f00" }}>Error</h1>;

	return <RestaurantDetail {...businessData} />;
};

export default RestaurantView;
