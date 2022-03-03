<template>
  <div class="maincontainer">
    <q-page class="column q-pa-md">
      <div class="q-pa-md">
        <div class="row justify-between q-gutter-md">
          <Card />
        </div>
      </div>
      <div class="col">
        <TableVue :row="data" />
      </div>
    </q-page>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { getData } from "../data/service";

import TableVue from "src/components/Table.vue";

export default {
  components: {
    Card,
    TableVue,
  },
  setup() {
    const data = ref([]);

    onMounted(async () => {
      data.value = await getData();
    });

    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
.maincontainer {
  width: 80vw;
  height: 100vh;
}
</style>
