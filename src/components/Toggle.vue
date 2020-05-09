<template>
  <div
    class="toggle w-16 cursor-pointer flex py-1 px-2 rounded-full bg-white-100 duration-200"
    :class="{ 'bg-green': value }"
    @click="toggle">
    <div class="spacer duration-200" :class="{ 'flex-grow': value }" />
    <div class="inner rounded-full bg-white" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

interface Props {
  value: boolean;
}

export default defineComponent<Props>({
  name: 'Toggle',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    function toggle() {
      emit('update:value', !props.value);
    }

    return {
      toggle,
    };
  },
});
</script>

<style lang="scss" scoped>
.inner {
  @apply w-6 h-6;
}
</style>
