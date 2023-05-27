<template>
  <header>
    <h2>DealMart</h2>
    <nav>
      <ul>
        <li><router-link to="/products">Products</router-link></li>
        <li>
          <shopping-cart-icon class="icon"></shopping-cart-icon
          ><router-link to="/cart">Cart</router-link>
          <base-badge v-if="store.hasCartItems" color="#6b9997">{{
            store.getCartNum
          }}</base-badge>
        </li>
      </ul>
    </nav>
    <!-- <button>Login</button> -->
  </header>
</template>

<script setup>
import { defineExpose } from "vue";
import { useProductStore } from "@/store/product";
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
// import { Bars3Icon } from "@heroicons/vue/24/outline";
const store = useProductStore();
defineExpose({ store });
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");
header {
  background-color: #47efd0;
  height: 7rem;
  padding: 0 3%;
  margin: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: sticky;
  top: 0;
  z-index: 4;
}
h2 {
  font-family: "Bungee Inline", sans-serif;
  font-size: 3.2rem;
}
ul {
  list-style: none;
  font-size: 1.8rem;
  margin-top: 0.8rem;
  display: flex;
  gap: 6vw;
}
li {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.icon {
  height: 2.2rem;
}
a:link,
a:visited {
  font-size: 1.6rem;
  text-decoration: none;
  padding: 0.3rem 0;
  color: #333;
  border-bottom: 4px solid transparent;
}

a:hover {
  border-bottom: 4px dotted whitesmoke;
}
a:active,
a.router-link-active {
  border-bottom: 4px solid whitesmoke;
}
/* button {
  border: 2px solid whitesmoke;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
} */
@media (max-width: 46em) {
  header {
    margin: 0 1%;
  }
  h2 {
    font-size: 2.5rem;
  }
  ul {
    font-size: 1.4rem;
    gap: 2.1rem;
  }
  .icon {
    font-size: 1.8rem;
  }
}
</style>
