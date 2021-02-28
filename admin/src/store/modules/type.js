import axios from "../../axios-auth";

const axiosBaseUrl = "warehouses/types";

export default {
  state: {
    types: [],
    typeForm: {
      name: "",
    },
  },
  getters: {
    types: (state) => state.types,
    typeForm: (state) => state.typeForm,
  },
  mutations: {
    SET_TYPES(state, data) {
      state.types = data;
    },
  },
  actions: {
    async fetchTypes({ commit }) {
      const types = await axios.get(axiosBaseUrl);
      commit("SET_TYPES", types.data);
    },
    async addType({ dispatch, state }, payload) {
      if (payload.name != '') {
        const response = await axios.post(axiosBaseUrl + "/add", payload);
        await dispatch("alerting", response.data);
        state.typeForm.name = "";
        await dispatch("fetchTypes");
      }
    },
  },
};
