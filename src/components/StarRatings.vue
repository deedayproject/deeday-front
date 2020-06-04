<template>
  <div class="star-ratings flex">
    <img
      class="mr-1 w-4"
      v-for="(star, index) in stars"
      :key="index"
      :src="star">
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import starFilled from '@/assets/svg/star-filled.svg?inline';
import starEmpty from '@/assets/svg/star-empty.svg?inline';

interface Props {
  value: number;
}

export default defineComponent<Props>({
  name: 'StarRatings',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup(props: Props) {
    const stars = computed(() => [
      ...Array(props.value).fill(starFilled),
      ...Array(5 - props.value).fill(starEmpty),
    ]);

    return {
      stars,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
