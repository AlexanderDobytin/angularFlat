import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IFlat } from "../flat.interface";
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
  flat: IFlat;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.flatListService.loadFlats().subscribe((data: IFlat[]) => {
        this.flat = data.find((flat) => flat.id == params.id);
      });
    });
  }
}
