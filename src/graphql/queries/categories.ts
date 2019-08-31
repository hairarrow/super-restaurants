import { gql } from "apollo-boost";

export default gql`
	query Categories {
		categories {
			total
			category {
				title
				alias
				parent_categories {
					title
				}
			}
		}
	}
`;
