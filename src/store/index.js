import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    // Manage User
    stateModalManageUser: false
  },
  mutations: {
    mutationModalManageUSer (state) {
      state.stateModalManageUser = !state.stateModalManageUser
    }
  },
  actions: {},
  modules: {}
});
