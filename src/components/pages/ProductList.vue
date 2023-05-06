<template>
  <ul>
    <product-item></product-item>
  </ul>
</template>
<script setup>
import ProductItem from "../product/ProductItem.vue";
</script>
<style scoped>
ul {
  margin: 4rem auto;
  display: flex;
  max-width: 70rem;
  flex-direction: column;
}
</style>
