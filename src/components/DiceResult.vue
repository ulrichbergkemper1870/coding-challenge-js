<template>
  <div>{{ rolledNumber }}, {{ amount }}</div>
</template>

<script setup lang="ts">
defineProps({
  rolledNumber: Number,
  amount: Number,
  totalAmount: Number,
});
</script>

<style>
/* css goes here */
</style>
