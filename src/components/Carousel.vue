<template>
  <div class="carousel relative">
    <transition-group name="slide" tag="div" class="slider">
      <img
        v-for="image in imagesWithId"
        :key="image.id"
        :title="image.id"
        :src="image.src">
    </transition-group>
    <div class="dots">
      <button
        v-for="position in images.length"
        :key="position"
        @click="goToImage(position - 1)"
        class="w-2 h-2 p-1 mr-1 rounded-full bg-white opacity-50"
        :class="{'opacity-100': index === position - 1 }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { randomId } from '../utils';

interface Props {
  images: string[];
}

export default defineComponent<Props>({
  name: 'Carousel',
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const index = ref<number>(Math.floor(Math.random() * (props.images.length - 1) + 1));
    const originalOrder = props.images.map((img) => ({
      id: randomId(),
      src: img,
    }));
    const imagesWithId = ref([...originalOrder]);

    function goToImage(position: number) {
      const img = originalOrder[position];
      while (imagesWithId.value[0].id !== img.id) {
        const last = imagesWithId.value.pop();
        if (last) {
          imagesWithId.value.unshift(last);
        }
      }
      index.value = position;
    }

    goToImage(index.value);

    return {
      index,
      imagesWithId,
      goToImage,
    };
  },
});
</script>

<style lang="scss" scoped>
.carousel {
  .slider {
    @apply flex overflow-hidden w-full;
    height: 350px;

    img {
      @apply min-w-full;
    }
  }

  .dots {
    @apply absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
