import { Component, OnInit } from "@angular/core";
const ROW_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent implements OnInit {
  columnsPerRow: number = 3;
  rowHeight = ROW_HEIGHT[this.columnsPerRow];
  category!: string;
  constructor() {}

  ngOnInit(): void {}
  onColumnsCountChange(newColumns: number): void {
    this.columnsPerRow = newColumns;
    this.rowHeight = ROW_HEIGHT[this.columnsPerRow];
  }
  onSelectCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
