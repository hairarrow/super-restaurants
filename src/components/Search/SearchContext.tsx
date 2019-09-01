import React, {
	createContext,
	useReducer,
	Dispatch,
	PropsWithChildren
} from "react";
import {
	useSearchActions as createSearchActions,
	ISearchAction,
	ISearchActions
} from "./SearchActions";
import { ISearchState } from "./SearchReducer";

export function createSearchContext<S = ISearchState, A = ISearchAction>(
	defaultValue: S,
	reducer: (state: S, action: A) => S
) {
	const defaultDispatch: Dispatch<A> = () => defaultValue;
	const actions = createSearchActions(defaultValue, defaultDispatch);
	const ctx = createContext<{
		state: typeof defaultValue;
		dispatch: typeof defaultDispatch;
		actions: ISearchActions;
	}>({ state: defaultValue, dispatch: defaultDispatch, actions });

	function Provider(props: PropsWithChildren<{}>) {
		const [state, dispatch] = useReducer(reducer, defaultValue);

		return <ctx.Provider value={{ state, dispatch, actions }} {...props} />;
	}

	return [ctx, Provider] as const;
}
