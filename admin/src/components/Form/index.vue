<template>
  <div class="flex p-8 gap-x-6">
    <div
      v-if="isSucceed"
      class="fixed top-5 px-5 py-2 text-lg font-medium rounded-full left-1/2 transform -translate-x-1/2 bg-green-200 text-green-800"
    >
      {{ alertMsg }}
    </div>
    <add-warehouse />

    <div>
      <h2 class="alerting-msg">Testing purposes for adding types and clusters</h2>
      <add-type />
      <add-cluster />
      <add-city />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddWarehouse from "./SubForm/AddWarehouse";
import AddCity from "./SubForm/AddCity";
import AddCluster from "./SubForm/AddCluster";
import AddType from "./SubForm/AddType";

export default {
  components: {
    AddType,
    AddCluster,
    AddCity,
    AddWarehouse,
  },
  computed: {
    ...mapState(["isSucceed", "alertMsg"]),
  },
  
};
</script>

<style lang="scss">
h2.alerting-msg {
  @apply my-2 text-red-600;
}
form {
  @apply bg-white rounded-lg p-5 m-2 shadow-md;
  .form-field {
    @apply w-1/2;
  }
  label {
    @apply text-xl block select-none;
  }
  input:not([type="checkbox"]),
  select {
    @apply px-5 py-2 w-9/12 mt-1 mb-3 rounded-lg bg-gray-100 text-gray-900 border border-gray-800;
    outline: none;
  }
  button {
    @apply bg-orange-700 text-orange-100 mt-4 px-5 py-2 rounded-lg text-lg;
  }
}
</style>