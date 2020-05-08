<template>
  <div class="event-type">
    <div class="head flex items-center">
      <div class="relative">
        <img src="@/assets/svg/background-step.png" alt="background step">
        <p class="absolute inset-0 flex items-center justify-center text-white text-5xl">1</p>
      </div>
      <div class="flex flex-col ml-6">
        <h2 class="text-duck-green text-3xl font-semibold">Un évènement à organiser ?</h2>
        <h3 class="text-gray text-xl">De quel évènement s'agit-il ?</h3>
      </div>
    </div>
    <div class="content grid grid-cols-4 gap-4 m-12">
      <button
        :class="{ selected: events[index] === selected }"
        @click="selected = events[index]"
        v-for="(icon, index) in icons"
        :key="icon">
        <figure class="flex flex-col justify-between items-center h-full font-light">
          <img class="w-16" :src="icon" alt="icon">
          <figcaption>{{ events[index] }}</figcaption>
        </figure>
      </button>
    </div>
    <div class="actions mx-12 flex justify-end">
      <button class="btn yellow">
        <span>Suivant</span>
        <img class="h-6" src="@/assets/img/btn-arrow.png">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import icons from '@/constants/event-icons';

const events = [
  'Pot de départ',
  'Cocktail',
  'Séminaire',
  'Soirée',
  'Formation',
  'Anniversaire',
  'Réunion',
  'After Work',
  'Dîner',
  'Autres',
  'Petit Déjeuner',
  'Déjeuner',
];

export default defineComponent({
  name: 'EventType',
  setup() {
    const selected = ref<null | string>(null);

    return {
      selected,
      icons,
      events,
    };
  },
});
</script>

<style lang="scss">
.content button {
  @apply border rounded border-gray w-40 h-40;
  @apply p-4 text-gray-200;
  justify-self: center;

  &.selected {
    @apply bg-duck-green text-white;
  }
}
</style>
