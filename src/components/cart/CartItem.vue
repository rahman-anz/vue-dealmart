<template>
  <li>
    <router-link :to="productDetailLink">
      <img :src="require(`../../images/${image}.jpg`)"
    /></router-link>
    <div class="text-box">
      <button class="btn-close" @click="removeItem">
        <XCircleIcon class="icon-close" />
      </button>
      <router-link class="title" :to="productDetailLink">{{
        title
      }}</router-link>
      <h4 class="price">Price per Item : ₹ {{ price }}</h4>
      <div class="quantity">
        <h4 class="quantity-heading">Quantity :</h4>
        <button v-if="minmQuantity" @click="minusQuantity">
          <MinusCircleIcon class="icon-quantity" />
        </button>
        <h4>{{ quantity }}</h4>
        <button @click="addQuantity">
          <PlusCircleIcon class="icon-quantity" />
        </button>
      </div>
      <h3 class="total">Total : ₹ {{ totalPrice }}</h3>
    </div>
  </li>
</template>

<script setup>
import { defineProps, defineExpose, computed } from "vue";
import { XCircleIcon } from "@heroicons/vue/24/solid";
import { PlusCircleIcon } from "@heroicons/vue/24/outline";
import { MinusCircleIcon } from "@heroicons/vue/24/outline";
import { useProductStore } from "@/store/product";

const props = defineProps({
  id: String,
  title: String,
  image: String,
  price: Number,
  quantity: Number,
});
const store = useProductStore();

const removeItem = () => {
  store.removeFromCart(props.id);
};
const totalPrice = computed(() => {
  return props.price * props.quantity;
});
const addQuantity = () => store.addToCart(props.id);
const minusQuantity = () => store.minusQuantity(props.id);
const minmQuantity = computed(() => {
  if (store.getCartItemById(props.id).quantity > 1) return true;
  else return false;
});
const productDetailLink = computed(() => {
  return "/products/" + props.id;
});

defineExpose({ removeItem, addQuantity, minusQuantity });
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  border: 1px solid #999;
}
li img {
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  margin: 1rem;
}
.text-box {
  width: 35rem;
  text-align: center;
  border-left: 1px solid #999;
  position: relative;
}
.btn-close {
  position: absolute;
  top: -1.1rem;
  right: -1.1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.icon-close {
  height: 2.4rem;
  stroke: aliceblue;
}
.title {
  display: inline-block;
  font-size: 1.6rem;
  text-decoration: none;
  color: #065748;
  margin: 1rem 0 1.5rem 0;
}
.price,
.quantity {
  font-size: 1.5rem;
}
.quantity {
  border-bottom: 1px solid #999;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}
.quantity button {
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
}
.icon-quantity {
  height: 2rem;
  fill: #004538;
  stroke: aliceblue;
}
.total {
  font-size: 1.5rem;
  margin: 0.8rem 0 0.7rem 0;
}
</style>
