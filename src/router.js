import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./components/pages/ProductList.vue";
import ProductDetails from "./components/pages/ProductDetails.vue";
import ShoppingCart from "./components/pages/ShoppingCart.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductList },
    { path: "/products/:id", component: ProductDetails, props: true },
    { path: "/cart", component: ShoppingCart },
  ],
});

export default router;
