<template>
  <div class="home">
    <h1>Welcome on Deeday's home page !</h1>
    <img alt="Vue logo" src="@/assets/img/vue-logo.png">
    <p>
      This is a preview of a Vue.js + Typescript setup for the deeday project.
      The purpose of this is to show how to demonstrate that Typescript is not that hard,
      and that it will improve the way we work on this project.
    </p>
    <p>
      You should find almost everything we would need in a Vue.js project:
    </p>
    <ul>
      <li>Typescript definitions</li>
      <li>Typescript decorator examples</li>
      <li>Vue.js components</li>
      <li>Components with props, data, computed property and methods</li>
      <li>Vuex store usage</li>
      <li>Vue filters</li>
      <li>Global use of SCSS variables (colors, fonts...)</li>
      <li>Patterns of code-splitting with typed exports</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  margin: 50px 0;
  > h1 {
    font-size: 3rem;
    color: $gray;
    font-family: 'Gilroy-Bold';
  }
  > img {
    margin: 40px 0;
  }

  > ul, p {
    width: 50%;
    text-align: left;
    font-size: 1.2rem;
    margin: 10px auto;
  }

  > p {
    line-height: 1.3;
  }

  > ul > li {
    margin: 5px 0;
    &:before {
      content: '•';
      margin-right: 5px;
    }
  }
}
</style>

