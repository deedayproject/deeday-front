import { getStoreBuilder, BareActionContext } from 'vuex-typex';
import { RootState } from '@/store';

export interface UserState {
  firstname?: string;
  lastname?: string;
}

const initialState: UserState = {
  firstname: undefined,
  lastname: undefined,
};

const builder = getStoreBuilder<RootState>().module('cart', initialState);

const userGetter = builder.read(function getUser(state: UserState): UserState {
  return state;
});

const personValidGetter = builder.read(function personValid(state: UserState): boolean {
  const { firstname, lastname } = state;
  return firstname !== undefined
    && !!firstname.length
    && lastname !== undefined
    && !!lastname.length;
});

function updateUser(context: BareActionContext<UserState, RootState>, person: UserState) {
  user.setUser(person);
}

function setUser(state: UserState, person: UserState) {
  state.firstname = person.firstname;
  state.lastname = person.lastname;
}

export const user = {
  get getUser() {
    return userGetter();
  },

  get personValid() {
    return personValidGetter();
  },

  get fullName(): string | null {
    const { firstname, lastname } = userGetter();
    return personValidGetter() ? `${firstname} ${lastname}` : null;
  },

  setUser: builder.commit(setUser),

  updateUser: builder.dispatch(updateUser),
};
