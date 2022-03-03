<template>
  <div v-for="dashboard in dashboardInfo" :key="dashboard.n">
    <q-card class="my-card">
      <q-card-section class="bg-positive text-white">
        <div class="text-subtitle1">
          <q-icon class="text-h6" :name="dashboard.icon" />
          {{ dashboard.title }}
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions class="text-h5" align="center" :style="dashboard.style">
        {{ dashboard.data }}
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { dashboard } from "../data/dashboard";

export default {
  setup() {
    const dashboardInfo = ref(dashboard);
    return {
      dashboardInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  min-width: 180px;
}
</style>
