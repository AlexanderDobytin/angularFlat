import { createAction, props } from "@ngrx/store";
import { IFlat } from "src/app/flat/flat.interface";

export const loadFlatsSuccess = createAction(
  "[Flat API] Flats Loaded Success",
  props<{ payload: IFlat[] }>()
);
export const loadFlats = createAction("[Flat Page] getFat");
