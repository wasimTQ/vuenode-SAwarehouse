<template>
    <div v-if="warehouseDetail" class="flex justify-center items-center w-full h-medium shadow-md bg-white">
        <div class="flex gap-x-6 items-center">
        <div class="relative main-img h-56">
          <div
            v-if="warehouseDetail.is_live"
            class="absolute animate-pulse top-1 right-1 bg-green-400 w-4 h-4 rounded-full"
          ></div>
          <img
            class="w-full h-full object-cover"
            src="@/assets/images/digital_warehouse_1.jpg"
            alt=""
          />

          <div
            class="absolute bottom-0 bg-gradient-to-t from-black to-transparent z-40 h-20 w-full"
          ></div>
        </div>
        <div>
          <h2 class="text-2xl font-medium text-black z-50">
            {{ warehouseDetail.name }}
          </h2>
          <div class="flex w-full mt-2 mb-4 justify-between">
            <p>{{ warehouseDetail.code }}</p>
            <div class="flex items-center">
              <span class="font-semibold"
                >{{ warehouseDetail.space_available }}
              </span>
              <span class="svg">
                <img
                  class="w-4 h-4 ml-3"
                  src="@/assets/icons/services-icon.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div class="details">
            <div class="wrapper">
              <span class="svg">
                <img src="@/assets/icons/cluster-icon.png" alt="" />
              </span>
              <span>{{ warehouseDetail.cluster.name }} </span>
            </div>
            <div class="wrapper">
              <span class="svg">
                <img src="@/assets/icons/space-icon.svg" alt="" />
              </span>
              <span>{{ warehouseDetail.type.name }} </span>
            </div>
            <div class="wrapper">
              <span class="svg">
                <img src="@/assets/icons/location-icon.svg" alt="" />
              </span>
              <span>{{ warehouseDetail.city.name }} </span>
            </div>
          </div>
          <div class="flex w-full mt-6 gap-x-10">
            <button
              @click="$emit('show-form')"
              class="w-1/2 py-3 rounded-full text-lg px-5 bg-green-200 text-green-800"
            >
              Edit
            </button>
            <button
              @click="deleteWarehouse(warehouseDetail.id)"
              class="w-1/2 py-3 rounded-full text-lg px-5 bg-red-200 text-red-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    props: {
        warehouseDetail: {
            type: Object,
        },
    },
    methods: {
      ...mapActions(["deleteWarehouse"]),
    }
}
</script>


<style lang="scss" scoped>
.details {
  @apply flex gap-2 flex-wrap;
  .wrapper {
    @apply border rounded-full border-black flex px-5 py-2 items-center;
  }
  img {
    @apply w-5 h-5 mr-2;
  }
}
</style>