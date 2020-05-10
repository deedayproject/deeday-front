<template>
  <div class="checkbox flex items-center">
    <input
      type="checkbox"
      @input="$emit('input', $event.target.checked)"
      :value="value"
      :id="id"
      hidden>
    <label :for="id" class="h-5 w-5 block border-gray-500 border rounded">
      <div v-if="value" class="bg-green rounded w-full h-full" />
    </label>
    <slot name="label" :id="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { randomId } from '@/utils';

interface Props {
  value: boolean;
}

export default defineComponent<Props>({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  name: 'Checkbox',
  setup() {
    const id = ref(randomId());

    return {
      id,
    };
  },
});
</script>

<style lang="scss" scoped>
label {
  padding: 2px;
}
</style>
