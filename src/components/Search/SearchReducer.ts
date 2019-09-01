import { Business } from "../../graphql/queries/types/Business";
import { Categories } from "../../graphql/queries/types/Categories";
import { ISearchAction, SearchActions } from "./SearchActions";

export interface ISearchState {
	openNow: boolean;
	price: string;
	categories?: Categories;
	restaurants?: Business[];
	selectedCategories?: string[];
}

export const initialState: ISearchState = {
	openNow: true,
	price: "$",
	restaurants: [],
	selectedCategories: []
};

export default function SearchReducer(
	state: ISearchState = initialState,
	action: ISearchAction
): ISearchState {
	switch (action.type) {
		case SearchActions.UpdateSelectedCategories:
			return {
				...state,
				selectedCategories: action.selectedCategories
			};
		case SearchActions.UpdateCategories:
			return {
				...state,
				categories: action.categories
			};
		default:
			return state;
	}
}
