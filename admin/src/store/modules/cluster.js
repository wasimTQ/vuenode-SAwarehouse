import axios from "../../axios-auth";

const axiosBaseUrl = "warehouses/clusters";

export default {
  state: {
    clusters: [],
    clusterForm: {
      name: "",
    },
  },
  getters: {
    clusters: (state) => state.clusters,
    clusterForm: (state) => state.clusterForm,
  },
  mutations: {
    SET_CLUSTERS(state, data) {
      state.clusters = data;
    },
  },
  actions: {
    async fetchClusters({ commit }) {
      const clusters = await axios.get(axiosBaseUrl);

      commit("SET_CLUSTERS", clusters.data);
    },
    async addCluster({ dispatch, state }, payload) {
      
      if (payload.name != '') {
        const response = await axios.post(axiosBaseUrl + "/add", payload);
        await dispatch("alerting", response.data);
        state.clusterForm.name = "";
        await dispatch("fetchClusters");
      }
    },
  },
};
