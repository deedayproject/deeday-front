<template>
  <div class="event-describe">
    <div class="head flex items-center">
      <div class="relative">
        <img src="@/assets/svg/background-step.png" alt="background step">
        <p class="absolute inset-0 flex items-center justify-center text-white text-5xl">2</p>
      </div>
      <div class="flex flex-col ml-6">
        <h2 class="text-duck-green text-3xl font-semibold">Un évènement à organiser ?</h2>
        <h3 class="text-gray text-xl">Dis-nous en plus</h3>
      </div>
    </div>
    <div class="content m-12">
      <form @submit.prevent>
        <div class="form-group">
          <label for="event-title">Une idée de titre ?</label>
          <input type="text" name="event-title" placeholder="Nom de l'évènement" id="event-title">
        </div>
        <div class="flex">
          <div class="form-group mr-8">
            <label>Déjà vos dates ?</label>
            <div class="flex items-center mt-2">
              <Toggle class="mr-2" :value.sync="dateSelected" />
              <p class="text-gray-100 font-light">Oui, la date est arrêtée</p>
            </div>
          </div>
          <div class="form-group">
            <label for="place">Où ?</label>
            <input id="place" placeholder="Adresse, lieu" type="text">
          </div>
        </div>
        <div class="form-group">
          <label>Nombre de participants</label>
          <vue-slider
            class="mt-4"
            v-model="peopleCount"
            :dot-options="dotOptions"
            :process-style="processStyle"
            :height="8"
            :min="4"
            :max="500"
            :dot-size="32">
            <template #tooltip="{ value }">
              <p class="text-gray-300">{{ value }}</p>
            </template>
          </vue-slider>
        </div>
        <div class="form-group">
          <label>Budget à atteindre</label>
          <vue-slider
            class="mt-4"
            v-model="range"
            :dot-options="dotOptions"
            :process-style="processStyle"
            :height="8"
            :interval="5"
            :min="0"
            :max="3000"
            :tooltip-placement="['top', 'bottom']"
            :dot-size="32">
            <template #tooltip="{ value }">
              <p class="text-gray-300">{{ value }}€</p>
            </template>
          </vue-slider>
        </div>
      </form>
    </div>
    <div class="actions mx-12 flex justify-end">
      <button class="btn yellow" @click="$emit('previous')">
        <img class="h-6 transform rotate-180" src="@/assets/img/btn-arrow.png">
        <span>Précédent</span>
      </button>
      <button class="btn yellow ml-8" @click="$emit('next')">
        <span>Suivant</span>
        <img class="h-6" src="@/assets/img/btn-arrow.png">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import TailwindConfig from '@/../tailwind.config';
import Toggle from '@/components/Toggle.vue';

export default defineComponent({
  name: 'EventDescribe',
  components: { Toggle, VueSlider },
  data() {
    return {
      processStyle: {
        'background-color': TailwindConfig.theme.extend.colors.green.default,
      },
      dotOptions: {
        tooltip: 'always',
        tooltipStyle: {
          'background-color': TailwindConfig.theme.extend.colors.green.default,
        },
      },
    };
  },
  setup() {
    const dateSelected = ref<boolean>(false);
    const peopleCount = ref<number>(4);
    const range = ref<[number, number]>([0, 200]);

    return {
      dateSelected,
      peopleCount,
      range,
    };
  },
});
</script>

<style lang="scss">
.form-group {
  @apply flex flex-col;
  @apply mb-8;

  label {
    @apply text-gray-200 mb-3;
  }
}
</style>
