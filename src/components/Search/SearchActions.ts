import { Dispatch } from "react";
import { Business } from "../../graphql/queries/types/Business";
import { Categories } from "../../graphql/queries/types/Categories";
import { updateCategories } from "./actions";
import { ISearchState } from "./SearchReducer";

export enum SearchActions {
	UpdateOpen = "SEARCH_UPDATE_OPEN",
	UpdatePrice = "SEARCH_UPDATE_PRICE",
	UpdateCategories = "SEARCH_UPDATE_CATEGORIES",
	UpdateSelectedCategories = "SEARCH_UPDATE_SELECTED_CATEGORIES",
	UpdateResults = "SEARCH_UPDATE_RESULTS",
	ClearFilters = "SEARCH_CLEAR_FILTERS"
}

export interface ISearchAction {
	type: SearchActions;
	openNow?: boolean;
	price?: string;
	categories?: Categories;
	restaurants?: Business[];
}

export interface ISearchActions<T = ISearchAction> {
	// updateOpen(open: boolean): T;
	// updatePrice(price: string): T;
	updateCategories(categories: Categories): T;
	// updateSelectedCategories(selected: string[]): T;
	// updateResults(results: Business[]): T;
	// clearFilters(): T;
}

export const useSearchActions = <S = ISearchState, A = Dispatch<ISearchAction>>(
	state: S,
	dispatch: A
): ISearchActions => ({ updateCategories });
