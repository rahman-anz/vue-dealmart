<template>
  <span class="badge"><slot></slot></span>
</template>
<script setup>
import defineProps from "vue";
defineProps({ color: String });
</script>
<style scoped>
.badge {
  font-size: 1.8rem;
  background-color: v-bind(color);
  color: aliceblue;
  border-radius: 12px;
  padding: 0.2rem 1rem;
}
</style>
