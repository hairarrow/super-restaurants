import { useQuery } from "@apollo/react-hooks";
import React, { FC } from "react";
import categoryQuery from "../../graphql/queries/categories";

const Filters: FC = () => {
	const { loading, error, data } = useQuery(categoryQuery);

	console.log(loading, error, data);

	return (
		<form onSubmit={() => null}>
			<label>Something</label>
		</form>
	);
};

export default Filters;
