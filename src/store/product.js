import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [
      {
        id: "c1",
        title: "Campus Mens 5g-820 Running Shoe",
        price: 2499,
        details:
          "Elevate your style with this classy pair of Running Shoes from the house of Campus brand. Featuring a contemporary refined design with exceptional comfort, this pair is perfect to give your quintessential dressing an upgrade.",
        image: "product1",
        rating: 4.5,
      },
      {
        id: "c2",
        title: "Highlander Sneakers For Men - Grey",
        price: 1250,
        details:
          "Elevate your style with this classy pair of Running Shoes from the house of Campus brand. Featuring a contemporary refined design with exceptional comfort, this pair is perfect to give your quintessential dressing an upgrade.",
        image: "product2",
        rating: 4,
      },
      {
        id: "c3",
        title: "Puma Firefly Walking Shoes For Men",
        price: 2700,
        details:
          "PUMA has made history as a creator of fast product designs for the fastest athletes on the planet: We enhance sports such as football, running and training, golf, basketball and motorsports with performance and sport-inspired lifestyle products.",
        image: "product3",
        rating: 3.5,
      },
    ],
    cart: {
      products: [],
      quantity: 0,
      totalAmount: 0,
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
      return state.cart.quantity;
    },
    getCartAmount(state) {
      return state.cart.totalAmount;
    },
  },
  actions: {
    getProductById(id) {
      return this.products.find((prod) => prod.id === id);
    },
    getCartItemById(id) {
      return this.cart.products.find((prod) => prod.id === id);
    },
    addToCart(id) {
      const selectedItem = this.getProductById(id);
      const existingItem = this.getCartItemById(id);
      if (!existingItem) {
        this.cart.products.unshift({ ...selectedItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      this.cart.quantity++;
      this.cart.totalAmount += selectedItem.price;
    },
    removeFromCart(id) {
      const selectedItemIndex = this.cart.products.findIndex(
        (prod) => prod.id === id
      );
      const selectedItem = this.cart.products[selectedItemIndex];
      this.cart.quantity -= selectedItem.quantity;
      this.cart.totalAmount -= selectedItem.quantity * selectedItem.price;
      this.cart.products.splice(selectedItemIndex, 1);
    },
    minusQuantity(id) {
      const selectedItem = this.getCartItemById(id);
      selectedItem.quantity--;
      this.cart.quantity--;
      this.cart.totalAmount -= selectedItem.price;
    },
  },
});
