<template>
  <form @submit.prevent="addCluster(clusterForm)" action="">
    <div>
      <label for="clustername">Cluster Name</label>
      <input type="text" id="clustername" v-model="clusterForm.name" />
    </div>
    <button>Add cluster</button>
  </form>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["clusterForm"]),
  },
  methods: {
    ...mapActions(["addCluster"]),
  },
};
</script>