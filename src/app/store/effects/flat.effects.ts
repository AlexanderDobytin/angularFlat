import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { FlatListService } from "src/app/services/flat-list.service";

@Injectable()
export class FlatsEffects {
  loadFlats$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Flat Page] getFat"),
      mergeMap(() =>
        this.flatListService.loadFlats().pipe(
          map((data) => {
            return {
              type: "[Flat API] Flats Loaded Success",
              payload: data,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private flatListService: FlatListService
  ) {}
}
