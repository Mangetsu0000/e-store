import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent implements OnInit {
  sort: string = "desc";
  itemsCount: number = 12;
  @Output() columnCountChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }
  onCountUpdate(newCount: number): void {
    this.itemsCount = newCount;
  }
  onColumnsUpdate(newColumns: number): void {
    this.columnCountChange.emit(newColumns);
  }
}
