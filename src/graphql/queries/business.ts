import { gql } from "apollo-boost";

export default gql`
	query Business {
		business(id: "garaje-san-francisco") {
			name
			id
			alias
			rating
			url
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
