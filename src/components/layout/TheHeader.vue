<template>
  <header>
    <h2>DealMart</h2>
    <nav>
      <ul>
        <li><router-link to="/products">Products</router-link></li>
        <li>
          <shopping-cart-icon class="icon"></shopping-cart-icon
          ><router-link to="/cart">Cart</router-link>
          <base-badge color="#6b9997">0</base-badge>
        </li>
      </ul>
    </nav>
    <button>Login</button>
  </header>
</template>
<script setup>
import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");
header {
  background-color: #47efd0;
  height: 9rem;
  padding: 0 3%;
  margin: 0 13%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
h2 {
  font-family: "Bungee Inline", sans-serif;
  font-size: 3.4rem;
}
ul {
  list-style: none;
  font-size: 1.8rem;
  margin-top: 1.2rem;
  display: flex;
  gap: 8rem;
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

a:hover,
a:active,
a.router-link-active {
  border-bottom: 4px solid whitesmoke;
}
button {
  border: 2px solid whitesmoke;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
}
</style>
