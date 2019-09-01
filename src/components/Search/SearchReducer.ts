import { Business } from "../../graphql/queries/types/Business";
import { Categories } from "../../graphql/queries/types/Categories";
import { ISearchAction, SearchActions } from "./SearchActions";

export interface ISearchState {
	openNow: boolean;
	price: string;
	categories?: Categories;
	restaurants?: Business[];
}

export const initialState: ISearchState = {
	openNow: true,
	price: "$",
	restaurants: []
};

export default function SearchReducer(
	state: ISearchState = initialState,
	action: ISearchAction
): ISearchState {
	switch (action.type) {
		case SearchActions.UpdateCategories:
			return {
				...state,
				categories: action.categories
			};
		default:
			return state;
	}
}
