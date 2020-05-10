<template>
  <div
    class="impact-indicator flex items-center px-3 py-2"
    :class="{
      'bg-green-200 text-green-300': threshold.value === 0,
      'bg-blue-200 text-blue-300': threshold.value === 20,
      'bg-yellow-200 text-yellow-300': threshold.value === 80,
      'bg-orange-200 text-orange-300': threshold.value === 150,
      'bg-red-200 text-red-300': threshold.value === 250,
    }">
    <img class="mr-5" :src="threshold.image">
    <p class="leading-5">
      {{ weight > 250 ? '&gt;' : '&lt;' }} {{  weight > 250 ? 250 : supValue }}kg
      <br>
      <strong>de CO2</strong>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';
import treeLeafGreen from '@/assets/img/leaves/tree-leaf-green.svg?inline';
import treeLeafYellow from '@/assets/img/leaves/tree-leaf-yellow.svg?inline';
import treeLeafBlue from '@/assets/img/leaves/tree-leaf-blue.svg?inline';
import treeLeafOrange from '@/assets/img/leaves/tree-leaf-orange.svg?inline';
import treeLeafRed from '@/assets/img/leaves/tree-leaf-red.svg?inline';

interface Props {
  weight: number;
}

export default defineComponent<Props>({
  name: 'ImpactIndicator',
  props: {
    weight: {
      type: Number,
      required: true,
      validator: (value: number) => value > 0,
    },
  },
  setup(props: Props) {
    const thresholds: Record<number, string> = {
      0: treeLeafGreen,
      20: treeLeafBlue,
      80: treeLeafYellow,
      150: treeLeafOrange,
      250: treeLeafRed,
    };

    const threshold = computed(() => {
      const target = [...Object.entries(thresholds)
        .sort(([limitA], [limitB]) => +limitA - +limitB)]
        .filter(([limit]) => props.weight > +limit).pop();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const [value, image]: [string, string] = target!;

      return {
        image,
        value: +value,
      };
    });

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const supValue = computed(() => +[...Object.entries(thresholds)
      .sort(([limitA], [limitB]) => +limitA - +limitB)]
      .filter(([limit]) => props.weight < +limit).shift()![0]);

    return {
      threshold,
      supValue,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
