<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script setup>
import TheHeader from "./components/layout/TheHeader.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
html {
  font-size: 62.5%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #333;
}
body {
  /* background-color: #edfdfa; */
  font-family: "Inter", sans-serif;
}
</style>
