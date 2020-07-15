import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FlatListService,
  IPaginationData,
} from "src/app/services/flat-list.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-flat-pagination",
  templateUrl: "./flat-pagination.component.html",
  styleUrls: ["./flat-pagination.component.scss"],
})
export class FlatPaginationComponent implements OnInit {
  constructor(private flatListService: FlatListService) {}
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
    this.flatListService.paginationData.subscribe({
      next: (v) => {
        this.page = v.page;
        this.count = v.count;
        this.pageSize = v.pageSize;
      },
    });
  }
}
