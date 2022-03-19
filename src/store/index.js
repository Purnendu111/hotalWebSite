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
    },
    roomTypeList: [],
    roomList: [],
  },
  actions: {
    addToRoomList(context, obj) {
      console.log(obj);
      let item = '';
      if (context.state.roomList.length > 1) {
        item = context.state.roomList.find(
          (item) => item.roomType === obj.roomType
        );
      }
      if (item == '') {
        context.commit('addRooms', obj);
      }
    },
  },
  mutations: {
    addRooms(state, payload) {
      state.roomList.push(payload);
      state.roomTypeList.push(payload.roomType);
    },
  },
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
