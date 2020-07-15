import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IFlat } from "../flat.interface";
import { Observable } from "rxjs";
import { FlatListService } from "src/app/services/flat-list.service";

@Component({
  selector: "app-flat-page",
  templateUrl: "./flat-page.component.html",
  styleUrls: ["./flat-page.component.scss"],
})
export class FlatPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private flatListService: FlatListService
  ) {}
  flat$: Observable<IFlat>;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.flat$ = this.flatListService.getCurrentFlat(params.id);
    });
  }
}
