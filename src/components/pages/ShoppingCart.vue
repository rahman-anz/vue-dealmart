<template>
  <section>
    <h2>Your Cart</h2>
    <div v-if="store.getCartAmount" class="total-amount">
      <h3>Total Amount:</h3>
      <base-badge color="#32a792">₹ {{ store.getCartAmount }}</base-badge>
    </div>
    <ul v-if="store.hasCartItems">
      <cart-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :price="prod.price"
        :image="prod.image"
        :quantity="prod.quantity"
      ></cart-item>
      <base-button>Checkout</base-button>
    </ul>
    <p v-else class="empty-msg">No items in cart 🤔</p>
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
  border-bottom: 1.5px solid #999;
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
.empty-msg {
  font-size: 1.8rem;
  text-align: center;
}
</style>
