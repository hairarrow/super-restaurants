import { search_search_business } from "../../graphql/queries/types/search";
import { Categories } from "../../graphql/queries/types/Categories";
import { ISearchAction, SearchActions } from "./SearchActions";

export type TPrice = string | "$" | "$$" | "$$$" | "$$$$";

export interface ISearchInfo {
	total?: number;
	currentPage?: number;
}

export interface ISearchState {
	openNow: boolean;
	price: TPrice;
	categories?: Categories;
	results?: search_search_business[];
	resultsInfo?: ISearchInfo;
	selectedCategories?: string[];
}

export const initialState: ISearchState = {
	openNow: true,
	price: "",
	results: [],
	selectedCategories: [],
	resultsInfo: {
		total: 0,
		currentPage: 0
	}
};

export default function SearchReducer(
	state: ISearchState = initialState,
	action: ISearchAction
): ISearchState {
	switch (action.type) {
		case SearchActions.ClearFilters:
			return {
				...state,
				results: [],
				selectedCategories: [],
				resultsInfo: {
					total: 0,
					currentPage: 0
				},
				openNow: true,
				price: ""
			};
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
		case SearchActions.UpdatePrice:
			return {
				...state,
				price: action.price ? action.price : ""
			};
		case SearchActions.UpdateOpen:
			return {
				...state,
				openNow: action.openNow ? action.openNow : false
			};
		case SearchActions.UpdateResults:
			return {
				...state,
				results: action.results
			};
		case SearchActions.UpdateResultsInfo:
			return {
				...state,
				resultsInfo: action.resultsInfo
			};
		default:
			return state;
	}
}
