import { defineStore } from "#imports";
import type { CartItems } from "~/types/cartIems";

interface CartShopping {
  cartItems: Array<CartItems>;
}

export const useCartShoppingStore = defineStore("CartShopping", {
  state: (): CartShopping => ({
    cartItems: [],
  }),
  actions: {
    addToCart(item: CartItems) {
      this.cartItems.push(item);
    },
    removeFromCart(itemId: number) {
      this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
    },
  },
  getters: {
    isItemInCart: (state) => {
      return (id: number) =>
        state.cartItems.some((cartItem) => cartItem.id === id);
    },
    getTotalPrice: (state) => {
      return state.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
  persist: true,
});
