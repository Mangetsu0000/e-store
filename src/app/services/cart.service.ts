import { Injectable } from "@angular/core";
import { MatSelect } from "@angular/material/select";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private snackBar: MatSnackBar) {}
  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((i) => i.id === item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }
    this.cart.next({ items });
    this.snackBar.open("Item added to cart", "Close", { duration: 2000 });
  }
  decreaseQuantity(item: CartItem): void {
    let itemToRemove!: CartItem;
    let filteredItems = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity -= 1;
        if (_item.quantity === 0) {
          itemToRemove = _item;
        }
      }
      return _item;
    });
    if (itemToRemove) {
      filteredItems = this.removeItem(itemToRemove, false);
    }
    this.cart.next({ items: filteredItems });
    this.snackBar.open("one item removed", "Close", { duration: 2000 });
  }
  getTotal(items: CartItem[]): number {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
  clearCart(): void {
    this.cart.next({ items: [] });
    this.snackBar.open("Cart cleared", "Close", { duration: 2000 });
  }
  removeItem(item: CartItem, update = true): CartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== item.id
    );
    if (update) {
      this.cart.next({ items: filteredItems });
      this.snackBar.open("Item removed from cart", "Close", { duration: 2000 });
    }
    return filteredItems;
  }
}
