<template>
  <div>
    <div @click="$refs.showDetailBtn.click" class="relative main-img h-56">
      <div
        v-if="warehouse.is_live"
        class="absolute animate-pulse top-1 right-1 bg-green-400 w-4 h-4 rounded-full"
      ></div>
      <img
        class="w-full h-full object-cover"
        src="@/assets/images/digital_warehouse_1.jpg"
        alt=""
      />
      <h2 class="absolute bottom-1 left-1 text-xl font-medium text-white z-50">
        {{ warehouse.name }}
      </h2>
      <div
        class="absolute bottom-0 bg-gradient-to-t from-black to-transparent z-40 h-20 w-full"
      ></div>
    </div>
    <div class="flex w-full mt-2 mb-4 justify-between">
      <p>{{ warehouse.code }}</p>
      <div class="flex items-center">
        <span class="font-semibold">{{ warehouse.space_available }} </span>
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
        <span>{{ warehouse.cluster.name }} </span>
      </div>
      <div class="wrapper">
        <span class="svg">
          <img src="@/assets/icons/space-icon.svg" alt="" />
        </span>
        <span>{{ warehouse.type.name }} </span>
      </div>
      <div class="wrapper">
        <span class="svg">
          <img src="@/assets/icons/location-icon.svg" alt="" />
        </span>
        <span>{{ warehouse.city.name }} </span>
      </div>
    </div>

      <router-link
        :to="{
          path: '/details',
          query: { id: warehouse.id },
        }"
      >
    <button ref="showDetailBtn" @click="showDetail">
        Show Detail
    </button>
      </router-link>
  </div>
</template>

<script>
export default {
  props: {
    warehouse: {
      type: Object,
    },
  },
};
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
.main-img {
  cursor: pointer;
}
.main-img:hover ~ button {
  @apply text-white bg-orange-700;
}
button {
  @apply border border-orange-700 px-5 py-2 rounded-full text-orange-700 text-xl mt-4 duration-100 bg-transparent;
  &:hover {
    @apply text-white bg-orange-700;
  }
}
</style>