import { gql } from "apollo-boost";
import { businessPreviewFragment } from "./business";

export const searchQuery = gql`
	query search(
		$open_now: Boolean
		$location: String
		$categories: String
		$price: String
	) {
		search(
			location: $location
			open_now: $open_now
			categories: $categories
			price: $price
		) {
			total
			business {
				...businessPreviewFragment
			}
		}
	}
	${businessPreviewFragment}
`;
