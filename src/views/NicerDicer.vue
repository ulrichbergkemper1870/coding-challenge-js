<template>
  <div class="dice-app">
    <h1>Roll-a-Die App</h1>
    <div class="input-container">
      <label for="numSides">Select number of sides:</label>
      <select v-model="selectedSides" @change="resetStats">
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="20">20</option>
      </select>
      <button class="btn" @click="rollDie">Roll the Die</button>
      <button class="btn" @click="resetStats">Reset Stats</button>
    </div>
    <p>Total Rolls: {{ rolls.length }}</p>
    <div v-if="rolls.length > 0">
      <p v-for="(count, side) in rollCounts" :key="side">
        {{ side }}: {{ count }} times ({{
          ((count / rolls.length) * 100).toFixed(1)
        }}%)
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedSides = ref<number | null>(null);
const rolledValue = ref<number | null>(null);
const rolls = ref<number[]>([]);
const rollCounts = ref<Record<number, number>>({});

const rollDie = () => {
  if (!selectedSides.value) return;

  const min = 1;
  const max = selectedSides.value;
  const rolled = Math.floor(Math.random() * (max - min + 1)) + min;

  rolls.value.push(rolled);
  rolledValue.value = rolled;

  if (rollCounts.value[rolled] === undefined) {
    rollCounts.value[rolled] = 1;
  } else {
    rollCounts.value[rolled]++;
  }
};

const resetStats = () => {
  rolledValue.value = null;
  rolls.value = [];
  rollCounts.value = {};
};
</script>

<style>
.dice-app {
  text-align: center;
  margin-top: 100px;
}
.input-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 200px;
}
.result {
  font-size: 24px;
  margin-top: 20px;
}
.btn {
  margin: 10px 0px;
}
</style>
