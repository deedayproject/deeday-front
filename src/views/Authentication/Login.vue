<template>
  <div class="login">
    <p>{{ quotedMessage }}</p>
    <form>
      <label for="firstname">First name:</label>
      <input id="firstname" type="text" v-model="firstname">
      <label for="lastname">Last name:</label>
      <input id="lastname" type="text" v-model="lastname">
      <Button type="test" text="Update" class="update" @click.native="update" />
    </form>
    <p v-if="fullName">Full name is {{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import UserStore from '@/store/user';
import UIButton from '@/components/UIComponents/Button.vue';

@Component({
  components: {
    Button: UIButton,
  },
})
export default class Login extends Vue {
  // Data()
  public userStore?: UserStore;
  public message: string = 'Here we are on the login page';
  public firstname: string = '';
  public lastname: string = '';

  // Lifecycle Hook
  public created() {
    this.userStore = getModule(UserStore, this.$store);
  }

  // Method
  public update(): void {
    const { firstname, lastname } = this;
    this.userStore!.updateName({ firstname, lastname });
  }

  // Computed
  get quotedMessage(): string {
    return `"${this.message}"`;
  }

  get fullName(): string | null {
    return this.userStore!.fullName;
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
