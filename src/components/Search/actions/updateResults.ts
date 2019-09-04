import { search_search_business } from "../../../graphql/queries/types/search";
import { SearchActions } from "../SearchActions";

export default function updateResults(results: search_search_business[]) {
	return {
		type: SearchActions.UpdateResults,
		results
	};
}
