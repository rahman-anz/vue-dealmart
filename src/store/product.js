import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [
      {
        id: "c1",
        title: "Campus Mens 5g-820 Running Shoe",
        price: "1,209",
        details:
          "Elevate your style with this classy pair of Running Shoes from the house of Campus brand. Featuring a contemporary refined design with exceptional comfort, this pair is perfect to give your quintessential dressing an upgrade.",
        image: "campus1",
      },
      {
        id: "c2",
        title: "Highlander Sneakers For Men - Grey",
        price: "1,499",
        details:
          "Elevate your style with this classy pair of Running Shoes from the house of Campus brand. Featuring a contemporary refined design with exceptional comfort, this pair is perfect to give your quintessential dressing an upgrade.",
        image: "campus2",
      },
    ],
    cart: {
      products: [],
      quantity: 0,
      amount: 0,
    },
  }),
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    hasProducts: (state) => {
      return state.products && state.products.length > 0;
    },
    getCartItems(state) {
      return state.cart.products;
    },
    hasCartItems(state) {
      return state.cart.products && state.cart.products.length > 0;
    },
    getCartNum(state) {
      return state.cart.products.length;
    },
  },
  actions: {
    getProductById(id) {
      return this.products.find((prod) => prod.id === id);
    },
    addToCart(id) {
      const selectedItem = this.getProductById(id);
      this.cart.products.unshift(selectedItem);
    },
    removeFromCart(id) {
      const itemIndex = this.cart.products.findIndex((prod) => prod.id === id);
      this.cart.products.pop(itemIndex, 1);
    },
  },
});
