<template>
  <h1>FizzBuzz</h1>
  <form @submit.prevent="calculateFizzBuzz">
    <div class="input-container">
      <!-- React: <input value={fizzbuzzNumber} onKeyUp={handleKeyup} /> -->
      <!-- v-model - Vue directives provide a simpler and more declarative way
        to manipulate the DOM compared to the more imperative
        approach often used in React. -->
      <input
        v-model="fizzbuzzNumber"
        type="text"
        name="fizzbuzzNumber"
        pattern="[0-9]*"
        inputmode="numeric"
        @keyup="handleKeyup"
      />
      <span v-show="showErrorMessage" class="error-message"
        >Please enter a valid number.</span
      >
    </div>
    <button class="submit-btn" type="submit" :disabled="!isInputValid">
      Show output
    </button>
  </form>
  <h3>Output</h3>
  <p>{{ fizzbuzzResult }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";

const fizzbuzzNumber = ref<number>(0);
const fizzbuzzResult = ref<string>("");
const showErrorMessage = ref<boolean>(false);
const isInputValid = ref<boolean>(true);
const fizzbuzzList = ref<string[]>([]);

const handleKeyup = () => {
  const inputValue = parseInt(fizzbuzzNumber.value.toString(), 10);
  isInputValid.value = !isNaN(inputValue);
  showErrorMessage.value = isNaN(inputValue);
};

const calculateFizzBuzz = () => {
  fizzbuzzList.value = [];

  for (let i = 1; i <= fizzbuzzNumber.value; i++) {
    let value = "";
    if (i % 3 === 0) value += "Fizz";
    if (i % 5 === 0) value += "Buzz";
    if (!value) value = i.toString();
    fizzbuzzList.value.push(value);
  }
  fizzbuzzResult.value = fizzbuzzList.value.join(", ");
};
</script>

<style>
.input-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 200px;
}
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 10px;
}
.submit-btn {
  margin: 10px 0px;
}
</style>
