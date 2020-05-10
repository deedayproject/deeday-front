<template>
  <div class="event-config">
    <div class="head flex items-center">
      <div class="relative">
        <img src="@/assets/svg/background-step.png" alt="background step">
        <p class="absolute inset-0 flex items-center justify-center text-white text-5xl">3</p>
      </div>
      <div class="flex flex-col ml-6">
        <h2 class="text-duck-green text-3xl font-semibold">Un évènement à organiser ?</h2>
        <h3 class="text-gray text-xl">Dis-nous en plus</h3>
      </div>
    </div>
    <div class="content m-12 text-gray-200">
      <div class="form-group mb-12">
        <label>Impact environnemental</label>
        <div class="flex">
          <ImpactIndicator class="mr-4" :weight="15" />
          <ImpactIndicator class="mr-4" :weight="25" />
          <ImpactIndicator class="mr-4" :weight="85" />
          <ImpactIndicator class="mr-4" :weight="155" />
          <ImpactIndicator class="mr-4" :weight="300" />
        </div>
      </div>
      <div class="form-group">
        <label>Régime alimentaire</label>
        <div class="grid regime row-gap-1 col-gap-12 grid-cols-3">
          <Checkbox v-model="regime.glutenfree">
            <template #label="{ id }">
              <label :for="id">Sans Gluten</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.bio">
            <template #label="{ id }">
              <label :for="id">Bio</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.vegetarian">
            <template #label="{ id }">
              <label :for="id">Végétarien</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.vegan">
            <template #label="{ id }">
              <label :for="id">Végan</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.other">
            <template #label="{ id }">
              <label :for="id">Autres</label>
            </template>
          </Checkbox>
        </div>
      </div>
      <div class="form-group">
        <label>Moyens de transport</label>
        <div class="grid regime row-gap-1 col-gap-12 grid-cols-5">
          <Checkbox v-model="regime.glutenfree">
            <template #label="{ id }">
              <label :for="id">A pieds</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.bio">
            <template #label="{ id }">
              <label :for="id">Trotinette</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.vegetarian">
            <template #label="{ id }">
              <label :for="id">Tramway</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.vegan">
            <template #label="{ id }">
              <label :for="id">Covoiturage</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.other">
            <template #label="{ id }">
              <label :for="id">Voiture</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.other">
            <template #label="{ id }">
              <label :for="id">Vélo</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.other">
            <template #label="{ id }">
              <label :for="id">Métro</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.other">
            <template #label="{ id }">
              <label :for="id">Bus</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.other">
            <template #label="{ id }">
              <label :for="id">Train</label>
            </template>
          </Checkbox>
        </div>
      </div>
      <div class="form-group">
        <label>Matériels</label>
        <div class="grid regime row-gap-1 col-gap-6 grid-cols-2">
          <Checkbox v-model="regime.glutenfree">
            <template #label="{ id }">
              <label :for="id">Assiettes en carton</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.bio">
            <template #label="{ id }">
              <label :for="id">Eclairage basse consommation</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.vegetarian">
            <template #label="{ id }">
              <label :for="id">Pailles bio dégradables</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.vegan">
            <template #label="{ id }">
              <label :for="id">Serviettes en papier recyclé</label>
            </template>
          </Checkbox>
          <Checkbox v-model="regime.vegan">
            <template #label="{ id }">
              <label :for="id">Confettis papier recyclé</label>
            </template>
          </Checkbox>
        </div>
      </div>
    </div>
    <div class="actions mx-12 flex justify-end">
      <button class="btn yellow ml-8">
        <span>Rechercher</span>
        <img class="h-6" src="@/assets/img/btn-arrow.png">
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import Toggle from '@/components/Toggle.vue';
import ImpactIndicator from '@/components/ImpactIndicator.vue';

export default defineComponent({
  name: 'EventConfig',
  components: { Toggle, ImpactIndicator },
  setup() {
    const regime = reactive({
      glutenfree: false,
      bio: false,
      vegan: false,
      vegetarian: false,
      other: false,
    });

    return {
      regime,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-group {
  @apply flex flex-col items-start;
  @apply mb-8;

  label {
    @apply text-gray-200 mb-3;
  }
}

.regime {
  grid-auto-columns: auto;

  label {
    @apply ml-2;
  }
}
</style>
