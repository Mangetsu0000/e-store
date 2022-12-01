import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styles: [],
})
export class FiltersComponent implements OnInit {
  @Output() SelectCategory = new EventEmitter<string>();
  categories: string[] = ["All", "Electronics", "Books", "Movies", "Music"];
  constructor() {}

  ngOnInit(): void {}
  onSelectCategory(category: string): void {
    this.SelectCategory.emit(category);
  }
}
