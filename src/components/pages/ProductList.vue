<template>
  <ul v-if="store.hasProducts">
    <product-item
      v-for="prod in store.getProducts"
      :key="prod.id"
      :image="prod.image"
      :id="prod.id"
      :title="prod.title"
      :price="prod.price"
      :details="prod.details"
    ></product-item>
  </ul>
</template>
<script setup>
import ProductItem from "../product/ProductItem.vue";
import { useProductStore } from "@/store/product.js";
import { defineExpose } from "vue";
const store = useProductStore();
defineExpose({ store });
</script>
<style scoped>
ul {
  margin: 4rem auto;
  display: flex;
  max-width: 70rem;
  flex-direction: column;
  gap: 3rem;
}
</style>
