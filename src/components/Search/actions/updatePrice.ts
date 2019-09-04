import { SearchActions } from "../SearchActions";
import { TPrice } from "../SearchReducer";

export default function updatePrice(price: TPrice) {
	return {
		type: SearchActions.UpdatePrice,
		price
	};
}
