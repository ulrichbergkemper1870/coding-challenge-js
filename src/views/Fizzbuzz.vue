<template>
  <h1>FizzBuzz</h1>
  <form action="submit">
    <input type="text" v-model="numberCount" />
    <button @click.prevent="evalFizzBuzz">submit</button>
  </form>
  <h3>Output</h3>
  <div v-for="n in Number(numberCount)">
    {{ fizzbuzz(n) }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import fizzbuzz from "@/fizzbuzz";

const numberCount = ref(0);
const resultString = ref("");

const evalFizzBuzz = () => {
  // 1,2,Fizz,4,Buzz,...,7
  // abc = ['a','b','c']
  // 023 = ['0','2','3'] => FizzBuzz,2,Fizz

  resultString.value = fizzbuzz(numberCount.value);
};
</script>
