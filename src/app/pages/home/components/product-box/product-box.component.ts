import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
  styles: [],
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode: boolean = false;
  @Input() product!: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {}

  ngOnInit(): void {}
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
