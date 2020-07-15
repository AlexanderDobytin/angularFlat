import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FlatListService } from "src/app/services/flat-list.service";
import { Observable, pipe } from "rxjs";
import { IPaginationData } from "../flat.interface";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
@Component({
  selector: "app-flat-pagination",
  templateUrl: "./flat-pagination.component.html",
  styleUrls: ["./flat-pagination.component.scss"],
})
export class FlatPaginationComponent implements OnInit {
  constructor(
    private flatListService: FlatListService,
    private store: Store<{ flatlist: { paginationData: { count: number } } }>
  ) {}
  data: Observable<IPaginationData>;
  page: number;
  count: number;
  pageSize: number;
  @Output() changePage = new EventEmitter();

  pages() {
    if (this.count === undefined || this.pageSize === undefined) {
      return undefined;
    }
    return new Array(Math.ceil(this.count / this.pageSize)).fill("");
  }
  onChangePage(id) {
    this.flatListService.changePage(id);
    this.changePage.emit(id);
  }
  ngOnInit() {
    this.data = this.store
      .select((state) => state.flatlist.paginationData)
      .pipe(
        map((data) => {
          this.page = +this.flatListService.currentPage;
          this.count = data.count;
          this.pageSize = +this.flatListService.pageSize;
          return {
            count: +data.count,
            page: +this.flatListService.currentPage,
            pageSize: +this.flatListService.pageSize,
          };
        })
      );
  }
}
