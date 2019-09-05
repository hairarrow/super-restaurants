import React, { FC } from "react";

const RestaurantView: FC<any> = ({ match }) => (
	<h1>Restaurant: {match.params.id}</h1>
);

export default RestaurantView;
