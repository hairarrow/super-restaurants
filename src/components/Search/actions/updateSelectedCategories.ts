import { SearchActions } from "../SearchActions";

export default function updateSelectedCategories(selectedCategories: string[]) {
	return {
		type: SearchActions.UpdateSelectedCategories,
		selectedCategories
	};
}
