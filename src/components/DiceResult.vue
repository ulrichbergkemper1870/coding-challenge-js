<template>
  <td>{{ rolledNumber }}</td>
  <td>{{ amount }}</td>
  <!-- <td>{{ relativePercentage }} %</td> -->
  <td>
    <div class="progress-container">
      <div class="progress"></div>
    </div>
  </td>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  rolledNumber: number;
  amount: number;
  totalAmount: number;
}>();

const relativePercentage = ref<number>(0);

const updateRelativePercentage = () =>
  props.totalAmount ? Math.round((props.amount / props.totalAmount) * 100) : 0;

watch(
  () => props.totalAmount,
  () => {
    relativePercentage.value = updateRelativePercentage();
  }
);
</script>

<style>
.progress-container {
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
}

.progress {
  height: 20px;
  width: v-bind(relativePercentage + "%");
  border-radius: 10px;
  background-color: #7dbda4;
}
</style>
