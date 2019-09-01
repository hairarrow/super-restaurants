import { Categories } from "../../../graphql/queries/types/Categories";
import { SearchActions } from "../SearchActions";

export default function updateCategories(categories: Categories) {
	return { type: SearchActions.UpdateCategories, categories };
}
