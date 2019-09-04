import { gql } from "apollo-boost";
import { businessPreviewFragment } from "./business";

export const searchQuery = gql`
	query search($open_now: Boolean, $location: String, $categories: String) {
		search(location: $location, open_now: $open_now, categories: $categories) {
			total
			business {
				...businessPreviewFragment
			}
		}
	}
	${businessPreviewFragment}
`;
