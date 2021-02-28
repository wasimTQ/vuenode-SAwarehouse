<template>
  <div id="root" class="font-body">
    <nav class="flex justify-between items-center py-3 bg-blue-200 px-16">
      <router-link to="/">
      <h2>Stock Area Example</h2>
      </router-link>
      <div class="flex">
        <router-link to="/form">
          <button class="bg-orange-600 text-white px-5 py-2">Add</button>
        </router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  created() {
    const store = useStore();
    store.dispatch('fetchAll');
  },
};
</script>

