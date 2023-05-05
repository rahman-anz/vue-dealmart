import { defineStore } from "pinia";
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [
      {
        title: "Mens Hairdryer",
        price: "$44",
        description: "loremsaa dfdaf asdsd asddas",
      },
    ],
  }),
});
