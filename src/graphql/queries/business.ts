import { gql } from "apollo-boost";

export default gql`
	query Business {
		business(id: "garaje-san-francisco") {
			...businessDetails
			id
			alias
		}
	}

	fragment businessDetails on Business {
		name
		is_closed
		url
		rating
		price
		categories {
			title
		}
	}
`;
