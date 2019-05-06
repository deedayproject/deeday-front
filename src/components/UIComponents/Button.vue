
<template>
  <button class="ui-button" type="button" :class="type">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import { Prop, Vue } from 'vue-property-decorator';

enum Type {
  main,
  secondary,
  tertiary,
}

@Component
export default class UIButton extends Vue {
  @Prop()
  private type!: Type;

  @Prop()
  private text!: string;
}
</script>

<style lang="scss" scoped>
button {
  all: inherit;
  padding: 5px 10px;
  border: solid 1px $gray;
  border-radius: 5px;
  display: block;
  margin: 20px 0;
  width: auto;
  font-size: 1.1rem;
  text-align: center;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: $secondaryGreen;
    color: $white;
    border-color: transparent;
  }
}
</style>

