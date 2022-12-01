import { Component, Input, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: [],
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsCount = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsCount = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }
  constructor(private cartService: CartService) {}
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }
  clearCart(): void {
    this.cartService.clearCart();
  }
}
