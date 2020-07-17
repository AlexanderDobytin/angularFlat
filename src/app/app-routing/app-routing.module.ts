import { NgModule } from "@angular/core";

import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "../home/home/home.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  { path: "flat", loadChildren: "src/app/flat/flat.module#FlatModule" },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
