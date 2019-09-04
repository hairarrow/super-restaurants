import { SearchActions } from "../SearchActions";

export default function updateOpen(openNow: boolean) {
	return {
		type: SearchActions.UpdateOpen,
		openNow
	};
}
