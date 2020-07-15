import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlatComponent } from "./flat/flat.component";
import { FlatListComponent } from "./flat-list/flat-list.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlatPageComponent } from "./flat-page/flat-page.component";
import { StoreModule } from "@ngrx/store";
import * as Flatlist from "src/app/store/reducers/flat-list.reducer";
import { EffectsModule } from "@ngrx/effects";
import { FlatsEffects } from "src/app/store/effects/flat.effects";
import { FlatPaginationComponent } from './flat-pagination/flat-pagination.component';
@NgModule({
  declarations: [FlatComponent, FlatListComponent, FlatPageComponent, FlatPaginationComponent],
  imports: [
    CommonModule,
    SharedModule,
    EffectsModule.forFeature([FlatsEffects]),
    StoreModule.forFeature(Flatlist.flatListkey, Flatlist.reducer),
    RouterModule.forChild([
      {
        path: "flat",
        component: FlatListComponent,
      },
      { path: "flat/:id", component: FlatPageComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class FlatModule {}
