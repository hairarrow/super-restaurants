import { gql } from "apollo-boost";

export const businessPreviewFragment = gql`
	fragment businessPreviewFragment on Business {
		id
		name
		price
		photos
		is_closed
		rating
		categories {
			title
			alias
		}
	}
`;

export const businessDetailsFragment = gql`
	fragment businessDetailsFragment on Business {
		review_count
		location {
			formatted_address
		}
		coordinates {
			latitude
			longitude
		}
	}
`;

export const businessQuery = gql`
	query business($id: String) {
		business(id: $id) {
			...businessPreviewFragment
			...businessDetailsFragment
		}
	}
	${businessPreviewFragment}
	${businessDetailsFragment}
`;
