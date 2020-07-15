import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IFlat } from "../flat.interface";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-flat-page",
  templateUrl: "./flat-page.component.html",
  styleUrls: ["./flat-page.component.scss"],
})
export class FlatPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ flatlist: { flatList: IFlat[] } }>
  ) {}
  flat$: Observable<IFlat>;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.flat$ = this.store.select((state) => {
        return state.flatlist.flatList.find((flat) => flat.id == params.id);
      });
    });

    this.store.dispatch({ type: "[Flat Page] getFat" });
  }
}
