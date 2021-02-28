<template>
    <form
      class="w-7/12"
      @submit.prevent="addWarehouse( warehouseForm)"
      action=""
    >
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
          <select v-model="warehouseForm.selectedCityId" name="" id="">
            <option v-for="city in cities" :key="city.id" :value="city.id">
              {{ city.name }}
            </option>
          </select>
        </div>
        <div class="form-field">
          <label for="space">Space available</label>
          <input v-model="warehouseForm.space" type="number" id="space" />
        </div>
      </div>
      <div class="flex">
        <div class="form-field">
          <label for="type">Cluster</label>
          <select v-model="warehouseForm.selectedClusterId" name="" id="">
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
          <select v-model="warehouseForm.selectedTypeId" name="" id="">
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
            v-model="warehouseForm.isRegistered"
            type="checkbox"
            name="isRegistered"
            id="isRegistered"
          />
        </div>
        <div class="form-field">
          <label for="isLive">Is Live</label>
          <input
            v-model="warehouseForm.isLive"
            type="checkbox"
            name="isLive"
            id="isLive"
          />
        </div>
      </div>
      <button>Add warehouse</button>
    </form>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
export default {
 computed: {
     ...mapGetters([
      "clusters",
      "types",
      "cities",
      "warehouseForm",
    ]),
 },
 methods: {
     ...mapActions(["addWarehouse"]),
 },
};
</script>