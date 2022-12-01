import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
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
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
  onColumnsCountChange(newColumns: number): void {
    this.columnsPerRow = newColumns;
    this.rowHeight = ROW_HEIGHT[this.columnsPerRow];
  }
  onSelectCategory(newCategory: string): void {
    this.category = newCategory;
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }
}
