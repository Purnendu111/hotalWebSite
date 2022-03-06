import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import SecureLS from 'secure-ls';
// import { forEach } from "lodash";
const ls = new SecureLS({ isCompression: false });

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dateRange: {
      startDate: new Date(),
      endDate: new Date(),
      roomList:[]
    },
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      key: 'userDATA',
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
