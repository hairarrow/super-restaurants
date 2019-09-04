import { SearchActions } from "../SearchActions";

export default function clearFilters() {
	return {
		type: SearchActions.ClearFilters
	};
}
