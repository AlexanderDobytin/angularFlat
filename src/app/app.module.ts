import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home/home.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { FlatModule } from "./flat/flat.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FlatModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
