<template>
    <form @submit.prevent="addType(typeForm)" action="">
        <div>
          <label for="typename">Type Name</label>
          <input type="text" id="typename" v-model="typeForm.name" />
        </div>
        <button>Add type</button>
      </form>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
export default {
 computed: {
     ...mapGetters(['typeForm']),
 },
 methods: {
     ...mapActions(["addType"]),
 },
};
</script>