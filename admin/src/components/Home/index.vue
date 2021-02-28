<template>
  <div class="w-full">
    <div v-if="isError" class="px-5 py-2 text-xl fixed top-3 left-5 bg-red-200 text-red-700 rounded-full">
      {{alertMsg}}
    </div>
    <filter-form />

    <div
      class="grid grid-cols-1 md:grid-cols-3 w-full gap-x-8 gap-y-10 p-4"
      v-if="warehouses.length > 0"
    >
      <div v-for="warehouse in warehouses" :key="warehouse.id">
        <ShowWarehouse :warehouse="warehouse" />
      </div>
    </div>
    <div
      v-else
      class="bg-orange-200 m-8 text-orange-800 text-xl p-4 rounded-lg"
    >
      No Warehouse data found for your filter
      <span
        @click="resetFilters"
        class="cursor-pointer ml-3 border-b-2 border-orange-700"
        >Click to reset</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

import FilterForm from "./FilterForm";
import ShowWarehouse from "./ShowWarehouse";

export default {
  components: {
    ShowWarehouse,
    FilterForm,
  },

  computed: {
    ...mapState(['isError', 'alertMsg']),
    ...mapGetters(["warehouses"]),
  },
};
</script>

<style lang="scss">
form {
  @apply bg-white rounded-lg p-5 m-2 shadow-md w-10/12;
  .flex {
    @apply flex gap-x-8;
  }
  .form-field {
    @apply w-1/2;
  }
  label {
    @apply text-xl block select-none;
  }
  input:not([type="checkbox"]),
  select {
    @apply px-5 py-2 w-full mt-1 mb-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-800;
    outline: none;
  }
  button {
    @apply bg-orange-700 text-orange-100 mt-4 px-5 py-2 rounded-lg text-lg;
  }
}
</style>