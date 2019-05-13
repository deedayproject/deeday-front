import Vue from 'vue';
import Vuex from 'vuex';
import './user';
import { getStoreBuilder } from 'vuex-typex';
import { UserState } from './user';

Vue.use(Vuex);

export interface RootState {
  user: UserState;
}

const store = getStoreBuilder<RootState>().vuexStore();
export default store;
