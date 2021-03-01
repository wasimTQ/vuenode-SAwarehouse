<template>
  <div class="p-12 relative">
    <div v-if="isSucceed" class="px-5 py-2 text-xl bg-green-200 text-green-800">
      {{ alertMsg }}
    </div>
    <div
      class="fixed w-full h-screen bg-black bg-opacity-50 top-0 left-0 z-40"
      v-if="showEditForm"
      @click="showEditForm = false"
    ></div>
    <div class="absolute w-10/12 z-50 p-2" v-if="showEditForm">
      <edit-form @hide-form="showEditForm = false" :form="warehouseDetail" />
    </div>
    <div v-if="isFetching">Fetching warehouse data .........</div>
    <warehouse-detail v-if="warehouseDetail.id" :warehouseDetail="warehouseDetail" @show-form="showEditForm = true" />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { mapActions, mapGetters, mapState } from "vuex";
import EditForm from "./EditForm";
import WarehouseDetail from "./WarehouseDetail";

export default {
  components: { EditForm, WarehouseDetail },
  data() {
    return {
      showEditForm: false,
      isFetching: true,
    };
  },
  created() {
    const route = useRoute();
    console.log(route.query);
    if(route.query.id){
      this.fetchWarehouseDetail(route.query.id);
      this.isFetching = false;
    }
  },
  computed: {
    ...mapState(["isSucceed", "alertMsg"]),
    ...mapGetters(["warehouseDetail"]),
  },
  methods: {
    ...mapActions(["fetchWarehouseDetail", "deleteWarehouse"]),
  },
};
</script>
