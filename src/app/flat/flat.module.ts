import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlatComponent } from "./flat/flat.component";
import { FlatListComponent } from "./flat-list/flat-list.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { FlatPageComponent } from "./flat-page/flat-page.component";

@NgModule({
  declarations: [FlatComponent, FlatListComponent, FlatPageComponent],
  imports: [
    CommonModule,
    SharedModule,
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
