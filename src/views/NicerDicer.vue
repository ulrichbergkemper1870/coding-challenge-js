<template>
  <h1>Nicer Dicer</h1>

  <select @change="selectedDice" v-model="selected">
    <option disabled value="">Please select one Dice</option>
    <option>4</option>
    <option>6</option>
    <option>12</option>
    <option>20</option>
  </select>
  <button @click="rolldice">Roll the Dice</button>
  <ol id="rolledNumbers">
    <li v-for="(amount, index) in rolledNumbers" :key="index">
      <DiceResult
        :rolled-number="index + 1"
        :amount="amount"
        :total-amount="numberOfRolls"
      />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import rolldice from "../rolldice"
import DiceResult from "../components/DiceResult.vue";

const selected = ref<number>(4);
const rolledNumbers = ref<number[]>([0, 0, 0, 0]);
const numberOfRolls = ref<number>(0);

const selectedDice = () => {
  const newNumbers = [];
  for (let i = 0; i < selected.value; i++) {
    newNumbers.push(0);
  }
  rolledNumbers.value = newNumbers;
  numberOfRolls.value = 0;
};

const rolldice = () => {
  // creates number between 0 and N-1 (N = number of sides at the dice)
  const newRoll = Math.floor(Math.random() * selected.value);
  rolledNumbers.value[newRoll]++;
  numberOfRolls.value++;
};
</script>

<style>
/* css goes here */
</style>
