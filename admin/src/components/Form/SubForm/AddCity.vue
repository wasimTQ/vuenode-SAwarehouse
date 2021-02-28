<template>
  <form @submit.prevent="addCity(cityForm)" action="">
    <div>
      <label for="clustername">City Name</label>
      <input type="text" id="clustername" v-model="cityForm.name" />
    </div>
    <button>Add city</button>
  </form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
 computed: {
     ...mapGetters(['cityForm']),
 },
 methods: {
     ...mapActions(["addCity"]),
 },
};
</script>