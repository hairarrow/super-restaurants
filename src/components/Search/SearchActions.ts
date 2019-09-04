import { Dispatch } from "react";
import { search_search_business } from "../../graphql/queries/types/search";
import { Categories } from "../../graphql/queries/types/Categories";
import {
	clearFilters,
	updateCategories,
	updateOpen,
	updatePrice,
	updateResults,
	updateResultsInfo,
	updateSelectedCategories
} from "./actions";
import { ISearchInfo, ISearchState, TPrice } from "./SearchReducer";

export enum SearchActions {
	UpdateOpen = "SEARCH_UPDATE_OPEN",
	UpdatePrice = "SEARCH_UPDATE_PRICE",
	UpdateCategories = "SEARCH_UPDATE_CATEGORIES",
	UpdateSelectedCategories = "SEARCH_UPDATE_SELECTED_CATEGORIES",
	UpdateResults = "SEARCH_UPDATE_RESULTS",
	UpdateResultsInfo = "SEARCH_UPDATE_RESULTS_INFO",
	ClearFilters = "SEARCH_CLEAR_FILTERS"
}

export interface ISearchAction {
	type: SearchActions;
	openNow?: boolean;
	price?: string;
	categories?: Categories;
	results?: search_search_business[];
	selectedCategories?: string[];
	resultsInfo?: ISearchInfo;
}

export interface ISearchActions<T = ISearchAction> {
	updateOpen(open: boolean): T;
	updatePrice(price: TPrice): T;
	updateCategories(categories: Categories): T;
	updateSelectedCategories(selected: string[]): T;
	updateResults(results: search_search_business[]): T;
	updateResultsInfo(resultsInfo: ISearchInfo): T;
	clearFilters(): T;
}

export const useSearchActions = <S = ISearchState, A = Dispatch<ISearchAction>>(
	state: S,
	dispatch: A
): ISearchActions => ({
	updateCategories,
	updateSelectedCategories,
	clearFilters,
	updateOpen,
	updatePrice,
	updateResults,
	updateResultsInfo
});
