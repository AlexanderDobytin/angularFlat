import { Component, OnInit, Input } from "@angular/core";
import { IFlat } from "../flat.interface";

@Component({
  selector: "app-flat",
  templateUrl: "./flat.component.html",
  styleUrls: ["./flat.component.scss"],
})
export class FlatComponent implements OnInit {
  @Input() item: IFlat;
  constructor() {}
  ngOnInit(): void {}
}
