<template>
  <div class="article-detail">
    <header class="mx-16 my-8 flex justify-between">
      <div class="infos flex flex-col ">
        <h1 class="text-3xl text-black font-bold mb-4">Le Café Barge</h1>
        <div class="flex">
          <StarRatings :value="4" />
          <p class="text-gray-200 ml-4">Port de la rapée, Paris 11e</p>
        </div>
      </div>
      <div class="rounded-md bg-green p-3 text-white">
        <div class="flex justify-between">
          <p class="uppercase text-lg font-semibold">6KG CO2</p>
          <p class="font-thin">Impact environnemental</p>
        </div>
        <ul class="impact-values">
          <li>
            <span>0</span>
            <p>1 km à pied du lieu de travail</p>
          </li>
          <li>
            <span>3</span>
            <p>Confort de vie et aménagement</p>
          </li>
          <li>
            <span>0</span>
            <p>Accessibilité pour tous</p>
          </li>
        </ul>
      </div>
    </header>
    <main class="mx-16">
      <div class="layout">
        <div class="plan">Plan</div>
        <div class="picture-1">Photo 1</div>
        <div class="picture-2">Photo 2</div>
        <div class="picture-3">Photo 3</div>
        <div class="picture-4">Photo 4</div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import StarRatings from '@/components/StarRatings.vue';

export default defineComponent({
  name: 'ArticleDetail',
  components: { StarRatings },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.impact-values {
  @apply flex items-center mt-2;

  li {
    @apply flex items-center;

    &:not(:last-child) {
      @apply mr-6;
    }

    span {
      @apply w-8 h-8 mr-2 text-black font-bold;
      @apply flex justify-center items-center;
      @apply rounded;
      background-color: rgba(#fff, .5);
    }

    p {
      max-width: 150px;
      @apply leading-5 font-thin;
    }
  }
}

.layout {
  @apply grid gap-4 grid-cols-4 grid-rows-2;
  grid-template-areas: "plan plan picture-1 picture-2" "plan plan picture-3 picture-4";

  > div {
    @apply bg-gray-400 rounded p-32 flex items-center justify-center;

    &.plan { grid-area: plan; }
    &.photo-1 { grid-area: picture-1; }
    &.picture-2 { grid-area: picture-2; }
    &.picture-3 { grid-area: picture-3; }
    &.picture-4 { grid-area: picture-4; }
  }
}
</style>
