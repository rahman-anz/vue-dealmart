<template>
  <li>
    <img :src="require(`../../images/${image}.jpg`)" />
    <div class="text-box">
      <button @click="removeItem"><XCircleIcon class="icon" /></button>
      <h3 class="title">{{ title }}</h3>
      <h4 class="price">Price per Item :₹{{ price }}</h4>
      <h4 class="quantity">Quantity: {{ quantity }}</h4>
      <h3 class="total">Total : Rs.2400</h3>
    </div>
  </li>
</template>

<script setup>
import { defineProps, defineExpose } from "vue";
import { XCircleIcon } from "@heroicons/vue/24/outline";
import { useProductStore } from "@/store/product";

const props = defineProps({
  id: String,
  title: String,
  image: String,
  price: String,
  quantity: Number,
});
const store = useProductStore();

const removeItem = () => {
  store.removeFromCart(props.id);
};
defineExpose({ removeItem });
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  border: 1px solid #999;
}
li img {
  width: 12rem;
  height: 10rem;
  object-fit: cover;
  margin: 1rem;
}
.text-box {
  width: 35rem;
  text-align: center;
  border-left: 1px solid #999;
}
li button {
  margin-left: 90%;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.icon {
  height: 2.4rem;
}
.title {
  font-size: 1.6rem;
  margin-bottom: 1.8rem;
}
.price,
.quantity {
  font-size: 1.2rem;
}
.quantity {
  border-bottom: 1px solid #999;
  padding: 0.8rem;
}
.total {
  font-size: 1.5rem;
  margin: 0.7rem 0 0.7rem 0;
}
</style>
