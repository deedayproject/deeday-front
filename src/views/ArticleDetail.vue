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
    <main class="mx-16 my-8">
      <div class="layout mb-12">
        <div class="plan">Plan</div>
        <div class="picture-1">Photo 1</div>
        <div class="picture-2">Photo 2</div>
        <div class="picture-3">Photo 3</div>
        <div class="picture-4">Photo 4</div>
      </div>
      <div class="infos flex justify-between items-start">
        <div class="flex flex-col flex-grow mr-16">
          <div class="host flex items-center">
            <img class="w-12 mr-2" src="@/assets/img/juliette-carquaud.png">
            <div class="flex flex-col">
              <p class="name">Juliette Carquaud</p>
              <p class="font-bold">Gérante du lieu</p>
            </div>
          </div>
          <section id="description">
            <h2>Description</h2>
            <p>
              Un espace exceptionnel dédié aux événements corporate a ouvert
              ses portes à Paris. Gastronomie, le vin, la gourmandise font
              également partie des piliers du Concept Store.
            </p>
          </section>
          <section id="equipment">
            <h2>Equipement</h2>
            <div class="flex justify-start">
              <div class="grid grid-cols-4 gap-6">
                <div>
                  <img src="@/assets/img/wifi.png">
                  <p>Wifi</p>
                  <p>oui</p>
                </div>
                <div>
                  <img src="@/assets/img/pmr.png">
                  <p>Accessibilité pour tous</p>
                  <p>oui</p>
                </div>
                <div>
                  <img src="@/assets/img/pmr.png">
                  <p>Accessibilité pour tous</p>
                  <p>oui</p>
                </div>
                <div>
                  <img src="@/assets/img/pmr.png">
                  <p>Accessibilité pour tous</p>
                  <p>oui</p>
                </div>
                <div>
                  <img src="@/assets/img/pmr.png">
                  <p>Accessibilité pour tous</p>
                  <p>oui</p>
                </div>
                <div>
                  <img src="@/assets/img/parking.png">
                  <p>Parking payant</p>
                  <p>non</p>
                </div>
              </div>
            </div>
          </section>
          <section id="label">
            <h2>Certifications label écologique</h2>
            <div class="flex">
              <div class="grid grid-cols-6">
                <div>
                  <img src="@/assets/img/ecolabels/ab-eu.png">
                </div>
                <div>
                  <img src="@/assets/img/ecolabels/ab-fr.png">
                </div>
                <div>
                  <img src="@/assets/img/ecolabels/triman.jpg">
                </div>
                <div>
                  <img src="@/assets/img/ecolabels/nf.png">
                </div>
                <div>
                  <img src="@/assets/img/ecolabels/blue-flag.png">
                </div>
                <div>
                  <img src="@/assets/img/ecolabels/ecolabel-eu.png">
                </div>
              </div>
            </div>
          </section>
          <section id="time">
            <h2>Horaires</h2>
            <table class="text-gray-200 border-collapse">
              <thead class="uppercase font-normal">
                <th>Lun</th>
                <th>Mar</th>
                <th>Mer</th>
                <th>Jeu</th>
                <th>Ven</th>
                <th>Sam</th>
                <th>Dim</th>
              </thead>
              <tbody class="font-hairline">
                <tr>
                  <td>13:00</td>
                  <td>12:00</td>
                  <td>12:00</td>
                  <td>12:00</td>
                  <td>15:00</td>
                  <td>16:00</td>
                  <td>15:00</td>
                </tr>
                <tr>
                  <td>23:30</td>
                  <td>23:30</td>
                  <td>23:30</td>
                  <td>23:30</td>
                  <td>04:00</td>
                  <td>04:00</td>
                  <td>01:00</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="ideal">
            <h2>Ideal pour</h2>
            <div class="flex">
              <div class="grid grid-cols-6">
                <div>
                  <img src="@/assets/svg/events/departure.svg">
                  <p>Pot de départ</p>
                </div>
                <div>
                  <img src="@/assets/svg/events/cocktail.svg">
                  <p>Cocktail</p>
                </div>
                <div>
                  <img src="@/assets/svg/events/meeting.svg">
                  <p>Réunion</p>
                </div>
                <div>
                  <img src="@/assets/svg/events/party.svg">
                  <p>Soirée</p>
                </div>
              </div>
            </div>
          </section>
          <section id="comments">
            <h2>Commentaires</h2>
            <div class="grid grid-cols-2 gap-12 mb-6">
              <div class="comment">
                <div class="head flex items-center">
                  <img class="mr-4 w-16" src="@/assets/img/julienne-simon.png">
                  <div class="infos">
                    <h3 class="font-bold">Julienne Simon</h3>
                    <StarRatings class="inline-flex mr-2" :value="5"/>
                    <span class="text-gray text-sm">03/04/2019</span>
                  </div>
                </div>
                <p class="body text-gray mt-4">
                  Réservation effectuée quelques jours avant. Nous avons été plus que satisfaits:
                  accueil, service, rapidité et un excellent burger «le Max» servi avec frites
                  salade fraîches. Le plat m’a suffit, je me laisserai tenter par un dessert la
                  prochaine fois !
                </p>
              </div>
              <div class="comment">
                <div class="head flex items-center">
                  <img class="mr-4 w-16" src="@/assets/img/etienne-demontieu.png">
                  <div class="infos">
                    <h3 class="font-bold">Etienne Demontieu</h3>
                    <StarRatings class="inline-flex mr-2" :value="4"/>
                    <span class="text-gray text-sm">03/04/2019</span>
                  </div>
                </div>
                <p class="body text-gray mt-4">
                  Super moment ! L’équipe est au top, très à l’écoute et compétente avec une
                  parfaite maîtrise de leur carte ! Les burgers étaient excellents et
                  différents de ce que l’on peut voir d’habitude Je recommande à 100%
                </p>
              </div>
            </div>
            <a href="#" class="text-green font-bold">Voir les 44 autres commentaires</a>
          </section>
        </div>
        <div class="summary flex flex-col flex-shrink-0 p-6">
          <h5 class="text-gray-200 font-light mb-2">
            <span class="text-green font-semibold text-xl">200€</span> /jour
          </h5>
          <div class="datatable gap-3 grid grid-cols-2 mb-2">
            <label>Date</label>
            <p>24 Juin - 25 juin</p>
            <label>Participants</label>
            <p>50</p>
          </div>
          <button class="btn yellow text-center">
            <span class="flex-grow">Réserver</span>
            <img class="h-6" src="@/assets/img/btn-arrow.png">
          </button>
        </div>
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

.summary {
  box-shadow: 0 3px 10px rgba(#000, .1);
}

.datatable {
  label {
    @apply text-gray;
  }

  p {
    @apply text-gray-200;
  }
}

.infos {
  section {
    @apply pt-16 my-8;
    border-top: solid 1px #D1D1D1;
    h2 {
      @apply font-bold text-black text-xl;
      @apply border-l-4 border-green px-2 mb-4;
    }

    p {
      @apply text-gray font-light;
    }

    &#equipment {
      .grid > div {
        @apply flex flex-col justify-center items-center py-4 px-8;
        box-shadow: 0 3px 10px rgba(#000, .1);

        > img {
          @apply w-8;
        }

        > p {
          @apply text-center;
        }

        > p:first-of-type {
          @apply text-black font-bold mt-2;
        }

        > p:last-child {
          @apply font-light text-gray-200;
        }
      }
    }

    &#label {
      .grid > div {
        @apply flex flex-col justify-center items-center py-4 px-8;

        > img {
          @apply w-16;
        }
      }
    }

    &#time {
      td, th {
        @apply px-6 border-r border-l;
        border-color: #C9C9C9;

        &:first-child {
          @apply border-l-0;
        }
        &:last-child {
          @apply border-r-0;
        }
      }
    }

    &#ideal {
      .flex > div > div {
        @apply rounded-md p-2 flex flex-col justify-center items-center mr-6;
        box-shadow: 0 0 4px #E6E6E6;
      }

      img {
        @apply w-16;
      }

      p {
        @apply mt-2;
      }
    }
  }
}
</style>
