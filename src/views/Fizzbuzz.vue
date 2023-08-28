<template>
  <h1>FizzBuzz</h1>
  <input type="text" name="fizzbuzzNumber" v-model="fizzbuzzNumber" />
  <button :disabled="!isNaN(Number(output))" @click="updatefizzbuzz">
    Show output
  </button>
  <h3>Output</h3>
  <p>{{ output }}</p>
  <ol v-if="outputSplit?.length > 0 && output != 'Failure'" id="output">
    <li v-for="item in outputSplit" :key="item">
      {{ item }}
    </li>
  </ol>
</template>

<script setup lang="ts">
import fizzbuzz from "../fizzbuzz";
import { ref } from "vue";

const fizzbuzzNumber = ref<number>(0);
const output = ref<string>();
const outputSplit = ref<string[]>();

const updatefizzbuzz = () => {
  output.value = fizzbuzz(fizzbuzzNumber.value);
  outputSplit.value = output.value.split(", ");
};
</script>

<style>
#output {
  display: inline-block;
}
</style>
