import axios from "../../axios-auth";

const axiosBaseUrl = "warehouses/cities";

export default {
  state: {
    cities: [],
    cityForm: {
      name: "",
    },
  },
  getters: {
    cities: (state) => state.cities,
    cityForm: (state) => state.cityForm,
  },
  mutations: {
    SET_CITIES(state, data) {
      state.cities = data;
    },
  },
  actions: {
    async fetchCities({ commit }) {
      const cities = await axios.get(axiosBaseUrl);
      commit("SET_CITIES", cities.data);
    },
    async addCity({ dispatch, state }, payload) {
      if (payload.name != '') {
        const response = await axios.post(axiosBaseUrl + "/add", payload);
        await dispatch("alerting", response.data);
        state.cityForm.name = "";
        await dispatch("fetchCities");
      }
    },
  },
};
