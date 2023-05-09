<template>
  <section>
    <h2>Your Cart</h2>
    <div class="total-amount">
      <h3>Total Amount:</h3>
      <base-badge color="#32a792">₹2014</base-badge>
    </div>
    <ul v-if="store.hasCartItems">
      <cart-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :price="prod.price"
        :image="prod.image"
      ></cart-item>
    </ul>
  </section>
</template>

<script setup>
import { defineExpose } from "vue";
import { useProductStore } from "@/store/product";
const store = useProductStore();
const products = store.cart.products;
import CartItem from "../cart/CartItem.vue";
defineExpose({ products });
</script>

<style scoped>
section {
  margin: 4rem auto;
  max-width: 70rem;
}
h2 {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #999;
  padding-bottom: 1rem;
}

.total-amount {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
