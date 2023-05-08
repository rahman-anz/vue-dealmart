<template>
  <div class="main-box">
    <div class="left-column">
      <img src="../../images/campus1.jpg" alt="campus shoes" />
    </div>
    <div class="right-column">
      <h2>{{ product.title }}</h2>
      <p class="price">{{ product.price }}</p>
    </div>
  </div>
</template>
<script setup>
import { useProductStore } from "@/store/product";
import { defineProps, defineExpose } from "vue";
const props = defineProps({ id: String });
const store = useProductStore();
const product = store.getProductById(props.id);
defineExpose({ product });
</script>
<style scoped>
.main-box {
  margin: 4rem 13%;
  display: flex;
}
.left-column {
  position: sticky;
  width: 45%;
  height: 70rem;
  top: 0;
}
.left-column img {
  width: 100%;
}
.right-column {
  background-color: #edfdfa;
  width: 55%;
  display: flex;
  flex-direction: column;
}
</style>
