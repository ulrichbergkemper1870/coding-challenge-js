<template>
  <h1>Nicer Dicer</h1>

  <select @change="resetDice" v-model="selected">
    <option disabled value="">Please select one Dice</option>
    <option>4</option>
    <option>6</option>
    <option>12</option>
    <option>20</option>
  </select>
  <button @click="rolldice">Roll the Dice</button>
  <button @click="resetDice">Reset all Stats</button>

  <table id="firstTable">
    <thead>
      <tr>
        <th>Number</th>
        <th>Absolute Amount</th>
        <th>Relative Percentage to total rolls</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(amount, index) in rolledNumbers" :key="index">
        <DiceResult
          :rolled-number="index + 1"
          :amount="amount"
          :total-amount="numberOfRolls"
        />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DiceResult from "../components/DiceResult.vue";

const selected = ref<number>(4);
const rolledNumbers = ref<number[]>([0, 0, 0, 0]);
const numberOfRolls = ref<number>(0);

const resetDice = () => {
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
button {
  background: #afb4d8;
  color: #fff;
  padding: 10px;
  min-width: 30px;
  border-radius: 5px;
  margin: 0px 4px;
  border: none;
}
select,
input {
  border: 1px solid #afb4d8;
  padding: 8px;
  border-radius: 5px;
  margin: 4px;
}
table {
  margin: auto;
  margin-top: 36px;
}
table th {
  text-transform: uppercase;
  text-align: left;
  background: #afb4d8;
  color: #fff;
  padding: 8px;
  min-width: 30px;
  border-radius: 5px;
}

table td {
  text-align: left;
  padding: 8px;
  border-radius: 5px;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #e0e3f7;
}
</style>
