<template>
  <div class="create-event flex h-screen">
    <div class="left-side flex flex-col items-center px-12 py-8 w-4/12 bg-duck-green">
      <h1 class="flex items-center text-5xl font-bold text-white">
        <img class="mr-4" src="@/assets/svg/logo-deeday.svg" alt="Logo deeday">
        <span>Deeday</span>
      </h1>
      <div class="flex my-20">
        <img class="mx-12" src="@/assets/svg/lady-dress.svg" alt="Lady dress">
      </div>
      <h2 class="text-white text-center text-2xl font-normal">
        <strong>Pour des évènements d'entreprises</strong> durables et responsables
      </h2>
    </div>
    <router-view
      @next="goToStep(step + 1)"
      class="w-8/12 p-16 overflow-y-scroll" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'OraganizeEvent',
  setup(props, { root }) {
    const steps = [
      'organize-event-type',
      'organize-event-describe',
    ];
    const step = ref(0);

    function goToStep(toStep: number) {
      step.value = toStep;
      root.$router.push({ name: steps[step.value] }).catch(() => {});
    }

    goToStep(0);

    return {
      step,
      goToStep,
    };
  },
});
</script>

<style>

</style>
