<template>
  <form class="m-4" autocomplete="off" @submit.prevent="" action="">
    <div class="flex">
      <div class="w-2/3">
        <div class="flex">
          <div class="w-3/4 relative">
            <div
              v-if="filteredNames.length > 0 && showSuggestions"
              class="max-h-25 absolute top-5 bg-white shadow-md w-full"
            >
              <div
                @click="useName(filteredName.name)"
                class="text-gray-700 py-2 px-5 text-lg mt-2 hover:bg-gray-100 cursor-pointer"
                v-for="filteredName in filteredNames"
                :key="filteredName"
              >
                {{ filteredName.name }}
              </div>
            </div>
            <label for="search">Search for warehouse</label>
            <input
              @input="searchWarehouseNames"
              type="text"
              v-model="filterForm.search"
              id="search"
            />
          </div>
          <div class="form-field">
            <label for="space">Minimum Space</label>
            <input v-model="filterForm.space" type="number" id="space" />
          </div>
        </div>
        <div class="flex">
          <div class="form-field">
            <label for="city">City</label>
            <select v-model="filterForm.city_id" name="city" id="city">
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.name }}
              </option>
            </select>
          </div>
          <div class="form-field">
            <label for="type">Type</label>
            <select v-model="filterForm.type_id" name="type" id="type">
              <option v-for="type in types" :key="type.id" :value="type.id">
                {{ type.name }}
              </option>
            </select>
          </div>
          <div class="form-field">
            <label for="cluster">Cluster</label>
            <select v-model="filterForm.cluster_id" name="cluster" id="cluster">
              <option
                v-for="cluster in clusters"
                :key="cluster.id"
                :value="cluster.id"
              >
                {{ cluster.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button @click="filterWarehouses(filterForm)">Search</button>
        <button
          @click="resetFilters"
          class="bg-transparent text-orange-700 border border-orange-700 block"
        >
          Reset
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
const _ = require("lodash");
export default {
  data() {
    return {
      showSuggestions: false,
      filterForm: {
        search: null,
        space: null,
        city_id: null,
        type_id: null,
        cluster_id: null,
      },
    };
  },
  computed: {
    ...mapGetters([
      "clusters",
      "types",
      "warehouses",
      "cities",
      "filteredNames",
    ]),
  },
  methods: {
    ...mapActions(["filterWarehouses", "getFilteredNames"]),
    resetFilters() {
      this.filterForm = {
        search: null,
        space: null,
        city_id: null,
        type_id: null,
        cluster_id: null,
      };
      this.filterWarehouses(this.filterForm);
    },
    searchWarehouseNames: _.debounce(function (e) {
      if (e.target.value.length > 0) {
        this.showSuggestions = true;
        this.getFilteredNames(e.target.value);
      }
    }, 1500),
    useName(name) {
      this.filterForm.search = name;
      this.showSuggestions = false;
      this.filterWarehouses(this.filterForm);
    },
  },
};
</script>