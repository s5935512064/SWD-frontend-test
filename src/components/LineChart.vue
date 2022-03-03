<template>
  <div class="flex items-center justify-center" style="height: 500px">
    <div class="q-gutter-x-md">
      <q-btn color="primary" @click="showLoading"> Show Data 1 </q-btn>
      <q-btn color="negative" @click="showLoading2"> Show Data 2 </q-btn>
    </div>
    <canvas id="line-chart" height="100" v-show="showSimulatedReturnData">
    </canvas>
    <canvas
      id="line-chart2"
      height="100"
      v-show="showSimulatedReturnData2"
    ></canvas>
  </div>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { onBeforeUnmount, onMounted } from "vue";
import { getData } from "../data/service";
import Chart from "chart.js";

export default {
  name: "LineChart",

  async mounted() {
    this.data = await getData();
    let label = this.data.map((item) => item.timestamp);
    let data1 = this.data.map((item) => item.data);
    let data2 = this.data.map((item) => item.data2);

    const ctx = document.getElementById("line-chart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            data: data1,
            label: "Data 1",
            borderColor: "#3e95cd",
            fill: false,
            lineTension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,

        title: {
          display: true,
          text: "Sensor Data Line Chart ",
        },

        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      },
    });

    const ctx2 = document.getElementById("line-chart2");
    new Chart(ctx2, {
      type: "line",
      data: {
        labels: label,
        datasets: [
          {
            data: data2,
            label: "Data 2",
            borderColor: "#8e5ea2",
            fill: false,
            lineTension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,

        title: {
          display: true,
          text: "Sensor Data Line Chart ",
        },

        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      },
    });
  },

  setup() {
    const data = ref([]);

    const showSimulatedReturnData = ref(false);
    const showSimulatedReturnData2 = ref(false);
    const $q = useQuasar();
    let timer;

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer);
        $q.loading.hide();
      }
    });

    return {
      data,
      showSimulatedReturnData,
      showSimulatedReturnData2,
      showLoading() {
        $q.loading.show();

        // hiding in 2s
        timer = setTimeout(() => {
          showSimulatedReturnData.value = !showSimulatedReturnData.value;
          showSimulatedReturnData2.value = false;
          $q.loading.hide();
          timer = void 0;
        }, 2000);
      },
      showLoading2() {
        $q.loading.show();

        // hiding in 2s
        timer = setTimeout(() => {
          showSimulatedReturnData2.value = !showSimulatedReturnData2.value;
          showSimulatedReturnData.value = false;
          $q.loading.hide();
          timer = void 0;
        }, 2000);
      },
    };
  },
};
</script>
