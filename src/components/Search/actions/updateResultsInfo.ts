import { SearchActions } from "../SearchActions";
import { ISearchInfo } from "../SearchReducer";

export default function updateResultsInfo(resultsInfo: ISearchInfo) {
	return {
		type: SearchActions.UpdateResultsInfo,
		resultsInfo
	};
}
