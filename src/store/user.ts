import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';

export interface Person {
  firstname: string;
  lastname: string;
}

@Module({ name: 'user' })
export default class UserStore extends VuexModule {
  public firstname: string = '';
  public lastname: string = '';

  get fullName(): string | null {
    return this.personValid ? `${this.firstname} ${this.lastname}` : null;
  }

  get personValid(): boolean {
    return !!this.firstname.length && !!this.lastname.length;
  }

  @Mutation
  public editName({ firstname, lastname }: Person) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  @Action({ commit: 'editName' })
  public async updateName(name: Person) {
    return name;
  }
}
