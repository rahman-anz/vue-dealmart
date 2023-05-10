<template>
  <button :class="mode"><slot></slot></button>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({ mode: String });
</script>
<style scoped>
button {
  padding: 0.7rem 1.4rem;
  background-color: #0de5a8;
  border: 2px solid transparent;
  cursor: pointer;
  border-radius: 12px;
  font-size: 1.4rem;
}
button:hover {
  background-color: #edfdfa;
  border: 2px solid #0de5a8;
}
button:active {
  background-color: #0de5a8;
}
.flat {
  background-color: #edfdfa;
  border: 1.3px solid #0de5a8;
}
</style>
