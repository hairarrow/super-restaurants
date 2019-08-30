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
`;
