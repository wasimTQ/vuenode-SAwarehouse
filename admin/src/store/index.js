import { createStore } from "vuex";
// import axios from "../axios-auth";
import warehouse from "./modules/warehouse";
import type from "./modules/type";
import cluster from "./modules/cluster";
import city from "./modules/city";

export default createStore({
  modules: {
    warehouse,
    type,
    cluster,
    city,
  },
  state: {
    alertMsg: "",
    isSucceed: false,
    isError: false,
  },
  getters: {},
  mutations: {
    SET_ALERT_MSG(state, data) {
      state.alertMsg = data.msg;
      state.isSucceed = data.success;
      state.isError = data.error;
    },
    REMOVE_ALERT_MSG(state) {
      state.alertMsg = "";
      state.isSucceed = false;
      state.isError = false;
    },
  },
  actions: {
    async fetchAll({ dispatch }) {
      console.log("fetching all");
      await dispatch("fetchTypes");
      await dispatch("fetchClusters");
      await dispatch("fetchCities");
      await dispatch("fetchWarehouses");
    },
    async alerting({ commit }, payload) {
      commit("SET_ALERT_MSG", payload);
      setTimeout(() => {
        commit("REMOVE_ALERT_MSG", payload);
      }, 2500);
    },
  },
});
