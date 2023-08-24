<template>
    <div
      class="relative"
      @focusout="close"
      tabindex="0"
    >
      <Icon
        variant="ellipses"
        class="cursor-pointer"
        @click.stop="toggleModal"
      />
      <div
        class="w-60 absolute right-0"
        v-if="open"
      >
        <ListBox
          class="rounded-lg"
          :class="direction"
          :options="options"
          @optionSelected="selectOption"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { PropType, ref } from 'vue';
  import Icon from '@/components/common/Icon.vue';
  import ListBox from '@/components/common/ListBox.vue';
  import { Option } from '@/types/common.interfaces';
  import useModal from '@/hooks/useModal';
  
  defineProps({
    options: {
      type: Array as PropType<Option[]>,
      default: () => [],
    },
  });
  
  const emit = defineEmits(['selected']);
  const direction = ref('');
  const positionBreakdownHeight = 680;
  
  const { open, closeModal: close } = useModal();
  
  const selectOption = (option: Option) => {
    emit('selected', option);
    open.value = false;
  };
  
  const toggleModal = (event: { y: number; }) => {
    direction.value = event.y > positionBreakdownHeight ? 'bottom-5' : '';
    open.value = !open.value;
  };
  </script>
  