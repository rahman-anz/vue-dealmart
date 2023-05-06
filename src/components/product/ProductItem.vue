<template>
  <li>
    <img src="../../images/campus1.jpg" />
    <div class="text-box">
      <h3>Campus Mens 5g-820 Running Shoe</h3>
      <div class="trending"><FireIcon class="icon" /><span>Top</span></div>
      <p class="price">₹1,209</p>
      <p class="details">
        Elevate your style with this classy pair of Running Shoes from the house
        of Campus brand. Featuring a contemporary refined design with
        exceptional comfort, this pair is perfect to give your quintessential
        dressing an upgrade.
      </p>
      <div class="container">
        <span class="alert">Only few items left</span>
        <div class="actions">
          <base-button>Add to cart</base-button>
          <base-button mode="flat"
            ><router-link to="/details">View Details</router-link></base-button
          >
        </div>
      </div>
    </div>
  </li>
</template>
<script setup>
import { FireIcon } from "@heroicons/vue/24/outline";
</script>
<style scoped>
li {
  list-style: none;
  height: 24rem;
  display: flex;
  align-items: center;
  background-color: #edfdfa;
  box-shadow: 0 0.7rem 1.4rem rgba(0, 0, 0, 0.18);
  border-radius: 12px;
  overflow: hidden;
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
  flex-shrink: 0;
}
.text-box {
  padding: 4rem 3rem;
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
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actions {
  display: flex;
  justify-content: flex-end;
  margin-right: 2rem;
  gap: 1.2rem;
}
a:link,
a:visited {
  text-decoration: none;
}
.trending {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
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
  font-size: 1.3rem;
}
</style>
