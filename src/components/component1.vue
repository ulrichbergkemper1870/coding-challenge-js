<template>
    <div class="rounded-lg flex font-bold text-xs uppercase bg-gray-25">
      <Button
        class="text-center text-sm w-1/2 inline-block py-3 rounded-lg uppercase"
        :class="(isFirstOptionSelected
          ? 'bg-black text-white rounded border border-b-gray-400 cursor-default' : 'cursor-pointer')"
        variant="outline"
        padding="regular"
        @mousedown.prevent=""
        @keyup="() => switchTo(firstOption.path, true)"
        @click="() => switchTo(firstOption.path, true)"
      >
        {{ firstOption.label }}
      </Button>
      <Button
        class="text-center text-sm w-1/2 inline-block py-3 rounded-lg uppercase"
        :class="(isSecondOptionSelected
          ? 'bg-black text-white rounded border border-b-gray-400 cursor-default' : 'cursor-pointer')"
        variant="outline"
        padding="compact"
        @mousedown.prevent=""
        @keyup="() => switchTo(secondOption.path, false)"
        @click="() => switchTo(secondOption.path, false)"
      >
        {{ secondOption.label }}
      </Button>
    </div>
  </template>
  <script lang="ts" setup>
  
  import { useRouter } from 'vue-router';
  import { onBeforeMount, ref, PropType } from 'vue';
  
  type Option = {
    path: string,
    label: string
  }
  
  const props = defineProps({
    firstOption: {
      type: Object as PropType<Option>,
      required: true,
    },
    secondOption: {
      type: Object as PropType<Option>,
      required: true,
    },
  });
  
  const router = useRouter();
  const isFirstOptionSelected = ref();
  const isSecondOptionSelected = ref();
  
  onBeforeMount(() => {
    isFirstOptionSelected.value = router.currentRoute.value.path === props.firstOption?.path;
    isSecondOptionSelected.value = router?.currentRoute.value.path === props.secondOption?.path;
  });
  
  const switchTo = (path: string, firstOptionSelectionValue: boolean) => {
    if (isFirstOptionSelected.value !== firstOptionSelectionValue) {
      isFirstOptionSelected.value = firstOptionSelectionValue;
      isSecondOptionSelected.value = !firstOptionSelectionValue;
      router.push(path);
    }
  };
  
  </script>
  