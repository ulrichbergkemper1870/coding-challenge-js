<template>
    <h1>FizzBuzz</h1>
    <form action="submit">
        <input type="text" v-model="numberCount"
        />
        <button @click.prevent="evalFizzBuzz">submit</button>
    </form>
    <h3>Output</h3>
    <div>
        {{ resultString }}
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const numberCount = ref(0);
    const resultString = ref('');

    const evalFizzBuzz = () => {
        resultString.value = numberCount.value.toString();
    }
</script>
