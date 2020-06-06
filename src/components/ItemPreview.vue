<template>
  <article class="item-preview rounded-md border border-gray-500">
    <div class="top">
      <Carousel :images="images" />
    </div>
    <div class="bottom duration-200 p-5 flex flex-col justify-between">
      <StarRatings :value="3" />
      <div class="flex my-2 justify-between font-black text-2xl">
        <h2>Le Café Barge</h2>
        <h3 class="text-center leading-5">
          200€<br>
          <span class="font-thin text-base">/jour</span>
        </h3>
      </div>
      <div class="flex">
        <h4 class="mr-6">Gare de Lyon</h4>
        <h5 class="flex items-center">
          <img class="mr-2" src="@/assets/svg/map-pin.svg">
          Paris
        </h5>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import Carousel from '@/components/Carousel.vue';
import StarRatings from '@/components/StarRatings.vue';

export default defineComponent({
  name: 'ItemPreview',
  components: { Carousel, StarRatings },
  setup() {
    const images = ref([
      'https://via.placeholder.com/600x350?text=1',
      'https://via.placeholder.com/600x350?text=2',
      'https://via.placeholder.com/600x350?text=3',
      'https://via.placeholder.com/600x350?text=4',
    ]);

    return {
      images,
    };
  },
});
</script>

<style lang="scss" scoped>
.item-preview {
  .bottom:hover {
    @apply text-white bg-duck-green cursor-pointer;
  }
}
</style>
