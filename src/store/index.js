import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    numnumnum: 0
  },
  mutations: {
    add(state) {
      state.numnumnum = state.numnumnum + 1
    }
  },
  actions: {}
})
export default store
