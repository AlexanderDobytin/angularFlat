import { createAction, props } from "@ngrx/store";
import { IFlat } from "src/app/flat/flat.interface";
import { IFlatListResponce } from "src/app/services/flat-list.service";
export const loadFlatsSuccess = createAction(
  "[Flat API] Flats Loaded Success",
  props<{ payload: IFlatListResponce }>()
);
export const loadFlats = createAction("[Flat Page] getFat");
