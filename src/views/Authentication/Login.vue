<template>
  <div class="login">
    <p>{{ quotedMessage }}</p>
    <form>
      <label for="firstname">First name:</label>
      <input id="firstname" type="text" v-model="firstname">
      <label for="lastname">Last name:</label>
      <input id="lastname" type="text" v-model="lastname">
      <UIButton type="test" text="Update" class="update" @click.native="update" />
    </form>
    <p v-if="fullName">Full name is {{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UIButton from '@/components/UIComponents/Button.vue';
import { user } from '@/store/user';

@Component({
  components: {
    UIButton,
  },
})
export default class Login extends Vue {
  // Data()
  public message: string = 'Here we are on the login page';
  public firstname: string = '';
  public lastname: string = '';

  // Method
  public update(): void {
    const { firstname, lastname } = this;
    user.updateUser({ firstname, lastname });
  }

  // Computed
  get quotedMessage(): string {
    return `"${this.message}"`;
  }

  get fullName(): string | null {
    return user.fullName;
  }
}
</script>

<style lang="scss" scoped>
.login {
  font-size: 2rem;
  color: $gray;
  margin: 50px 0;

  > form {
    margin: 50px auto;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > label {
      font-size: 1.3rem;
      margin: 10px 0 5px;
    }

    > input {
      all: inherit;
      border-radius: 5px;
      border: solid 1px $gray;
      margin: 0;
      padding: 5px 10px;
      font-size: 1.1rem;
    }
  }
}
</style>
