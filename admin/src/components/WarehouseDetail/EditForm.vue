<template>
  <form @submit.prevent="edit" action="">
    <div class="flex">
      <div class="form-field">
        <label for="name">Name</label>
        <input v-model="warehouseForm.name" type="text" id="name" />
      </div>
      <div class="form-field">
        <label for="code">Code</label>
        <input v-model="warehouseForm.code" type="text" id="code" />
      </div>
    </div>
    <div class="flex">
      <div class="form-field">
        <label for="city">City</label>
        <select v-model="warehouseForm.city_id" name="" id="">
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>
      <div class="form-field">
        <label for="space">Space available</label>
        <input v-model="warehouseForm.space_available" type="number" id="space" />
      </div>
    </div>
    <div class="flex">
      <div class="form-field">
        <label for="type">Cluster</label>
        <select v-model="warehouseForm.cluster_id" name="" id="">
          <option
            v-for="cluster in clusters"
            :key="cluster.id"
            :value="cluster.id"
          >
            {{ cluster.name }}
          </option>
        </select>
      </div>
      <div class="form-field">
        <label for="type">Type</label>
        <select v-model="warehouseForm.type_id" name="" id="">
          <option v-for="type in types" :key="type.id" :value="type.id">
            {{ type.name }}
          </option>
        </select>
      </div>
    </div>
    <h2 class="alerting-msg">Optional only for testing purposes</h2>
    <div class="flex">
      <div class="form-field">
        <label for="isRegistered">Is Registered</label>
        <input
          v-model="warehouseForm.is_registered"
          type="checkbox"
          name="isRegistered"
          id="isRegistered"
        />
      </div>
      <div class="form-field">
        <label for="isLive">Is Live</label>
        <input
          v-model="warehouseForm.is_live"
          type="checkbox"
          name="isLive"
          id="isLive"
        />
      </div>
    </div>
    <button>Edit warehouse</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    form: {
      type: Object,
    },
  },
  data() {
      return {
          warehouseForm: {},
      }
  },
  created () {
      this.warehouseForm = this.form;
  },
  computed: {
    ...mapGetters(["clusters", "types", "cities"]),
  },
  methods: {
    ...mapActions(["editWarehouse"]),
    edit(){
        this.$emit('hide-form');
        this.editWarehouse(this.warehouseForm)
    }
  },
};
</script>

<style lang="scss" scoped>

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