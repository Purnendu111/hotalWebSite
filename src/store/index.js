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
    totalPriceForRooms:0,
    roomTypeList: [],
    roomList: [],
  },
  actions: {
    dateChange(context, obj){
      context.commit('dateUpdate', obj);
    },
    cnclRoom(context, id){
      context.commit('cnclRoom', id);
    },
    addToRoomList(context, obj) {
      console.log(obj);
      let item = '';
      if (context.state.roomList.length > 1) {
        item = context.state.roomList.find(
          (item) =>{ 
            console.log(item.id+"======"+obj.id);
            item.id === obj.id
          }
        );
      }
      console.log(item);
      if (item == '' || item == undefined || item == null) {
        context.commit('addRooms', obj);
      }
    },
  },
  mutations: {
    addRooms(state, payload) {
      state.roomList.push(payload);
      state.roomTypeList.push(payload.roomType);
      let total = 0;
      state.roomList.forEach(element => {
        console.log(element.price);
        total += parseFloat(element.price)
      });
      state.totalPriceForRooms = total
    },
    dateUpdate(state, payload){
      state.dateRange.startDate = payload.startDate
      state.dateRange.endDate = payload.endDate
    },
    cnclRoom(state, id) {
			//console.log(obj.cartQuantity);
				let arr = state.roomList
			var i = arr.length;
			while (i--) {
				if (arr[i] && arr[i].id === id) {
					arr.splice(i, 1);
				}
			}
      let total = 0;
      state.roomList.forEach(element => {
        console.log(element.price);
        total += parseFloat(element.price)
      });
      state.totalPriceForRooms = total
		},
  },
  plugins: [
    createPersistedState({
      key: 'malharGreens',
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
