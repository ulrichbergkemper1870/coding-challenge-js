<template>
  <h1>FizzBuzz</h1>
  <form action="submit">
    <input type="text" name="fizzbuzzNumber" v-model="fizzbuzzNumber" />
    <button @click="updatefizzbuzz">Show output</button>
    <h3>Output</h3>
    <p>{{ output }}</p>
  </form>
</template>

<script setup lang="ts">
import fizzbuzz from "../fizzbuzz";
import { ref } from "vue";

const fizzbuzzNumber = ref(0);
const output = ref("");

const updatefizzbuzz = () => {
  console.log("update");
  output.value = fizzbuzz(fizzbuzzNumber.value);
  console.log(output, fizzbuzzNumber.value);
};
</script>

<style>
/* css goes here */
</style>
