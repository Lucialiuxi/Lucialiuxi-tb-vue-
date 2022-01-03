import Vue from 'vue';
import Vuex from 'vuex';
import { users } from './modules/user';
import { files } from './modules/file';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    files,
  }
});


export default store;