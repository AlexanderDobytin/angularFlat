import { Action, createReducer, on } from "@ngrx/store";
import * as FlatListActions from "../actions/flat-list.actions";
import { IFlat } from "../../flat/flat.interface";

export const flatListkey = "flatlist";
export interface IState {
  flatList: IFlat[];
  paginationData: { count: number };
}

export const initialState: IState = {
  flatList: [],
  paginationData: { count: 0 },
};

const flatListReducer = createReducer(
  initialState,
  on(FlatListActions.loadFlats, (state) => {
    return {
      ...state,
    };
  }),
  on(FlatListActions.loadFlatsSuccess, (state, action) => {
    return {
      ...state,
      flatList: action.payload.results,
      paginationData: { count: action.payload.count },
    };
  })
);

export function reducer(state: IState | undefined, action: Action) {
  return flatListReducer(state, action);
}
