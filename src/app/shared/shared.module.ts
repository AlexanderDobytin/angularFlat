import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [],
  imports: [HttpClientModule, ReactiveFormsModule, FormsModule],
  exports: [HttpClientModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
