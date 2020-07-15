import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IFlat } from "src/app/flat/flat.interface";
import { map } from "rxjs/operators";
import { Observable, Subscriber } from "rxjs";

export interface IFlatListResponce {
  count: number;
  next: string;
  results: IFlat[];
}

@Injectable({
  providedIn: "root",
})
export class FlatListService {
  constructor(private http: HttpClient) {}
  currentPage: number | string = 1;
  currentCity: number | string;
  categoryIdIn: number | string;
  numRoomsIn: number | string;
  pageSize: number | string = 5;

  updateFlat(value) {
    this.currentPage = 1;
    this.currentCity = value.cities;
    this.categoryIdIn = Object.keys(value.categories)
      .map((i) => {
        if (value.categories[i]) {
          return i;
        }
      })
      .filter((i) => i)
      .toString();
    this.numRoomsIn = Object.keys(value.countRooms)
      .map((i) => {
        if (value.countRooms[i]) {
          return i;
        }
      })
      .filter((i) => i)
      .toString();
  }

  changePage(id) {
    this.currentPage = id;
  }

  loadFlats() {
    let params = new HttpParams();
    params = params.append("page", `${this.currentPage}`);
    params = params.append("page_size", `${this.pageSize}`);
    params = params.append("city_id", `${this.currentCity || ""}`);
    params = params.append("category_id__in", `${this.categoryIdIn || ""}`);
    params = params.append("num_rooms__in", `${this.numRoomsIn || ""}`);

    return this.http
      .get("https://www.sdvor.com/api/common/flats/", { params })
      .pipe(
        map((data: IFlatListResponce) => {
          return data;
        })
      );
  }
}
