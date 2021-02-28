import axios from "../../axios-auth";

import router from '../../router';

const axiosBaseUrl = "warehouses";

export default {
  state: {
    iteration: 0,
    warehouses: [],
    filteredNames: [],
    warehouseForm: {
      name: "",
      code: "",
      space: 0,
      selectedTypeId: 0,
      selectedCityId: 0,
      selectedClusterId: 0,
      isRegistered: false,
      isLive: false,
    },
    warehouseDetail: {},
  },
  getters: {
    warehouses: (state) => state.warehouses,
    warehouseDetail: (state) => state.warehouseDetail,
    filteredNames: (state) => state.filteredNames,
    warehouseForm: (state) => state.warehouseForm,
  },
  mutations: {
    SET_WAREHOUSES(state, data) {
      state.warehouses = data;
    },
    RESET_WAREHOUSE_FORM(state){
      state.warehouseForm = {
        name: "",
        code: "",
        city: "",
        space: 0,
        selectedTypeId: 0,
        selectedClusterId: 0,
        isRegistered: false,
        isLive: false,
      };
    }
  },
  actions: {
    async fetchWarehouses({ commit }) {
      const warehouses = await axios.get(axiosBaseUrl);
      commit("SET_WAREHOUSES", warehouses.data);
    },
    async addWarehouse({state, dispatch, commit}) {
      let isNull = false;
      const payload = state.warehouseForm;
      for (const key in payload) {
        if(key == "isRegistered" || key == "isLive") {
          console.log(key);
          break;
        }
        
        if (payload[key] == '' || payload[key] === 0) {
          console.log(key,'null value');
          isNull = true;
          break;
        }
      }

      if(isNull) return;
      const response = await axios.post(axiosBaseUrl + "/add", payload);
      await dispatch("alerting", response.data);
      commit('RESET_WAREHOUSE_FORM');
      await dispatch("fetchWarehouses");
    },
    async filterWarehouses({commit}, payload){
      const response = await axios.get(axiosBaseUrl + "/filterby", {params: payload});
      commit("SET_WAREHOUSES", response.data);
    },
    async getFilteredNames({state}, payload){
      const response = await axios.get(axiosBaseUrl+'/filtered_names', {params: {search: payload}});
      state.filteredNames = response.data;
    },
    async fetchWarehouseDetail({state}, payload){
      const response = await axios.get(axiosBaseUrl+'/details/' + payload);
      state.warehouseDetail = response.data;
    },
    async deleteWarehouse({dispatch, state}, payload){
      const response = await axios.delete(axiosBaseUrl+'/' + payload);
      await dispatch("alerting", response.data);
      state.warehouseDetail = {};
      await dispatch("fetchWarehouses");
      router.replace('/');
    },
    async editWarehouse({dispatch, state}, payload){
      const response = await axios.put(axiosBaseUrl+'/update/' + payload.id, payload);
      console.log(response.data);
      state.warehouseDetail = [];
      await dispatch("fetchWarehouseDetail", payload.id);
      await dispatch("alerting", {
        msg: payload.id + ' updated successfully',
        success: true,
      });
      // window.location.reload()
    }
  },
};
