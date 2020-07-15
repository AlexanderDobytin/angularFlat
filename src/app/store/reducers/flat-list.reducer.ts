import { Action, createReducer, on } from "@ngrx/store";
import * as FlatListActions from "../actions/flat-list.actions";
import { IFlat } from "../../flat/flat.interface";

export const flatListkey = "flatlist";
export interface IState {
  flatList: IFlat[];
  id: number;
}

export const initialState: IState = {
  flatList: [],
  id: 1,
};

const flatListReducer = createReducer(
  initialState,
  on(FlatListActions.loadFlats, (state) => {
    return { ...state, flatList: state.flatList };
  }),
  on(FlatListActions.loadFlatsSuccess, (state, action) => {
    return { ...state, flatList: action.payload };
  })
);

export function reducer(state: IState | undefined, action: Action) {
  return flatListReducer(state, action);
}
