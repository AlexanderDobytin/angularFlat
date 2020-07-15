import { Component, OnInit } from "@angular/core";
import { FlatListService } from "src/app/services/flat-list.service";
import { IFlat } from "../flat.interface";
import { Observable } from "rxjs";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-flat-list",
  templateUrl: "./flat-list.component.html",
  styleUrls: ["./flat-list.component.scss"],
})
export class FlatListComponent implements OnInit {
  cities = [
    { name: "Все города" },
    { id: 3, name: "Нижневартовск" },
    { id: 13, name: "Челябинск" },
    { id: 5, name: "Пермь" },
    { id: 6, name: "Сургут" },
    { id: 8, name: "Тюмень" },
    { id: 1, name: "Москва" },
    { id: 2, name: "Екатеринбург" },
  ];
  flatCategories = [
    { name: "квартира", id: "8" },
    { name: "дом", id: "4" },
    { name: "участок", id: "5" },
    { name: "дом с участком", id: "10" },
    { name: "дача", id: "11" },
    { name: "коммерческая", id: "9" },
  ];
  form: FormGroup;
  countRooms = Array(5).fill(null);
  results: Observable<IFlat[]>;

  constructor(private flatListService: FlatListService) {}

  onSubmit() {
    this.results = this.flatListService.updateFlat(this.form.value);
  }
  changePage() {
    this.results = this.flatListService.loadFlats();
  }
  ngOnInit(): void {
    this.results = this.flatListService.loadFlats();
    const categories = {};
    const countRooms = {};
    this.flatCategories.forEach((item) => {
      categories[item.id] = new FormControl();
    });

    this.countRooms.forEach((item, index) => {
      countRooms[index] = new FormControl();
    });
    this.form = new FormGroup({
      cities: new FormControl(""),
      categories: new FormGroup(categories),
      countRooms: new FormGroup(countRooms),
    });
  }
}
