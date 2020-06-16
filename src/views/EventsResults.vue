<template>
  <div class="event-results">
    <header class="flex flex-col bg-duck-green py-4 px-16">
      <h1 class="text-white text-4xl font-bold">
        Nom de l'évènenement
      </h1>
      <div class="flex justify-between">
        <ul class="current-filters">
          <li>After Work</li>
          <li>24 Juin-25 Juin</li>
          <li>Paris, 11</li>
          <li>50 personnes</li>
          <li>500 - 1500€</li>
        </ul>
        <button class="filters btn yellow">
          <span>Filtres</span>
        </button>
      </div>
    </header>
    <main class="py-4">
      <div class="mx-16 categories-actions flex justify-between">
        <ul class="categories">
          <li>
            <router-link :to="{ query: { category: 'Tous' }}">Tous</router-link>
          </li>
          <li>
            <router-link :to="{ query: { category: 'Traiteurs' }}">Traiteurs</router-link>
          </li>
          <li>
            <router-link :to="{ query: { category: 'Lieux' }}">Lieux</router-link>
          </li>
          <li>
            <router-link :to="{ query: { category: 'Staff' }}">Staff</router-link>
          </li>
          <li>
            <router-link :to="{ query: { category: 'Animations' }}">Animations</router-link>
          </li>
          <li>
            <router-link :to="{ query: { category: 'Boissons' }}">Boissons</router-link>
          </li>
          <li>
            <router-link :to="{ query: { category: 'Matériel' }}">Matériel</router-link>
          </li>
        </ul>
        <button id="display-map" class="text-green flex items-center">
          <img class="mr-2" src="@/assets/svg/map-pin.svg">
          Afficher la carte
        </button>
      </div>
      <section id="places">
        <div class="flex justify-between">
          <h2 class="mb-6">Lieux</h2>
          <button>Tout afficher</button>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <ItemPreview />
          <ItemPreview />
          <ItemPreview />
        </div>
      </section>
      <section id="places">
        <div class="flex justify-between">
          <h2 class="mb-6">Traiteurs</h2>
          <button>Tout afficher</button>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <ItemPreview />
          <ItemPreview />
          <ItemPreview />
        </div>
      </section>
      <section id="places">
        <div class="flex justify-between">
          <h2 class="mb-6">Staff</h2>
          <button>Tout afficher</button>
        </div>
        <div class="grid grid-cols-3 gap-6">
          <ItemPreview />
          <ItemPreview />
          <ItemPreview />
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import ItemPreview from '@/components/ItemPreview.vue';

export default defineComponent({
  name: 'EventsResults',
  components: { ItemPreview },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/elements.scss';

ul.current-filters {
  @apply flex;
  li {
    @apply border border-duck-green-900;
    @apply btn mr-3 text-duck-green-900;
  }
}

.categories-actions {
  ul {
    @apply flex items-center;
    li a {
      @apply btn text-green;

      &.router-link-exact-active {
        @apply text-white bg-green;
      }
    }
  }
}

section {
  @apply mx-16 mt-12;
  > div {
    h2 {
      @apply border-l-4 pl-2 border-green;
      @apply text-2xl text-black leading-none font-bold;
    }

    button {
      @apply text-green font-bold;
    }
  }
}
</style>
