import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styles: [],
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() SelectCategory = new EventEmitter<string>();
  categoriesSubscriptions!: Subscription;
  categories!: string[];
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getAllCategories().subscribe((_categories) => {
      this.categories = _categories;
    });
  }
  onSelectCategory(category: string): void {
    this.SelectCategory.emit(category);
  }
  ngOnDestroy(): void {
    this.categoriesSubscriptions?.unsubscribe();
  }
}
