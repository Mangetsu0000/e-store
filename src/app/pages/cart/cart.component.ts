import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "sneaker",
        price: 199,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "jacket",
        price: 399,
        quantity: 2,
        id: 2,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "boots",
        price: 299,
        quantity: 1,
        id: 3,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "sun glasses",
        price: 499,
        quantity: 1,
        id: 4,
      },
    ],
  };

  dataSource: CartItem[] = [];

  displayedColumns: String[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }
  clearCart() {
    this.cartService.clearCart();
  }
  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
  }
  increaseQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }
  decreaseQuantity(item: CartItem): void {
    this.cartService.decreaseQuantity(item);
  }
}
