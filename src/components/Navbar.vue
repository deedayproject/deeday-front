<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/img/deeday-logo.png" alt="Deeday Logo">
        <h1>deeday</h1>
      </router-link>
    </div>
    <div class="actions">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.name">
        {{ route.name | capitalize }}
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { selectRoutes } from '@/routes';

@Component
export default class Navbar extends Vue {
  // Data()
  private routes = selectRoutes(['login', 'register']);
}
</script>

<style lang="scss" scoped>
nav {
  box-sizing: border-box;
  display: flex;
  max-height: 180px;
  width: 100%;
  padding: 20px 40px;

  > .logo {
    > a {
      display: flex;
      color:inherit;
      text-decoration: inherit;

      > img {
        height: 60px;
        width: auto;
      }
      > h1 {
        align-self: flex-end;
        font-family: 'Gilroy-Bold';
        font-size: 3rem;
        box-sizing: content-box;
        margin: 0 10px;
      }
    }
  }

  > .actions {
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;

    > a {
      margin-left: 20px;
      position: relative;
      font-size: 1.4rem;
      text-decoration: inherit;
      font-family: 'Gilroy-Bold';
      
      &:visited {
        color: inherit;
      }

      &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 0%;
        transform: translateX(-50%);
        border-bottom: 2px solid black;
        transition: all .2s;
      }

      &:hover:after {
        width: 90%;
      }
    }
  }
}
</style>

