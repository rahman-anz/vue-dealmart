<template>
  <li>
    <img :src="require(`../../images/${image}.jpg`)" />
    <div class="text-box">
      <h3>{{ title }}</h3>
      <div v-if="highPrice" class="trending">
        <FireIcon class="icon" /><span>Top</span>
      </div>
      <p class="price">₹{{ price }}</p>
      <p class="details">{{ details }}</p>
      <div class="container">
        <span v-if="highPrice" class="alert">Only few items left !</span>
        <div class="actions">
          <base-button @click="sendToCart">Add to cart</base-button>
          <router-link :to="productDetailLink"
            ><base-button mode="flat">View Details</base-button></router-link
          >
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import { useProductStore } from "@/store/product";
import { FireIcon } from "@heroicons/vue/24/outline";
import { defineProps, computed, defineExpose } from "vue";
import { useRoute } from "vue-router";
const props = defineProps({
  image: String,
  id: String,
  title: String,
  price: Number,
  details: String,
});
const route = useRoute();
const productDetailLink = computed(() => {
  return route.path + "/" + props.id;
});
const store = useProductStore();
const sendToCart = () => {
  store.addToCart(props.id);
};
const highPrice = computed(() => {
  if (props.price > 2000) return true;
  else return false;
});
defineExpose({ productDetailLink, sendToCart });
</script>
<style scoped>
li {
  list-style: none;
  display: flex;
  align-items: center;
  background-color: #dafcf6;
  box-shadow: 0 0.7rem 1.4rem rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  padding: 1rem;
  position: relative;
}
/* li:hover {
  transform: translateY(-1px);
  box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.14);
} */
img {
  height: 24rem;
  width: 24rem;
  object-fit: cover;
  border-radius: 12px;
  flex-shrink: 0;
}
.text-box {
  padding: 0rem 3rem;
}
h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
.price {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  font-weight: 600;
}
.details {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  line-height: 1.6;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  gap: 1.2rem;
}
a:link,
a:visited {
  text-decoration: none;
}
.trending {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  display: flex;
  align-items: center;
}
.icon {
  stroke: red;
  height: 2rem;
}
.trending span {
  color: red;
  font-size: 1.3rem;
  text-transform: uppercase;
  overflow: visible;
}
.alert {
  color: red;
  font-size: 1.4rem;
}
a:link,
a:visited {
  border-radius: 12px;
  border: 1.3px solid #0de5a8;
}
</style>
