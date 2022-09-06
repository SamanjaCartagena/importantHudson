<template>
  <div>
    <el-card class="box-card" style="width: 100%">
      <div v-if="this.$store.getters.currentRoutes != 'pm4'">
        <apexchart
          id="barChart"
          type="bar"
          height="380"
          :options="this.chartOptions"
          :series="this.series"
        >
        </apexchart>
      </div>
      <div v-else>
        <apexchart
          id="barChart"
          type="bar"
          height="380"
          :options="this.pmChart.chartOptions"
          :series="this.pmChart.series"
        >
        </apexchart>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import store from "../store";
import router from "../router";
import pm4json from "../../pm4.json";
export default {
  data() {
    return {
      moment: moment,
      count: 0,
      arr: [],
      dataValue: [],
      dataName: [],
      newArr: [],
      newNames: [],
      finalValues: [],
      datesNow: [],
      newDates: [],
      pm4: pm4json,
      pm4Names: [],
      pm4Values: [],

      a: "",

      series: [
        {
          data: [...this.$store.getters.allValues],
        },
      ],
      chartOptions: {
        chart: {
          id: "barChart",
          type: "bar",
          height: 250,

          events: {
            dataPointSelection: function (event, chartContext, config) {
              store.state.dat = config.dataPointIndex;
            },
          },
        },
        xaxis: {
          type: "date",
          labels: {},
          categories: [...this.$store.getters.allNames],
        },

        title: {
          text: "Energy (kW)",
          color: "#7f7370",
        },
        dataLabels: {
          enabled: true,

          offsetY: 0,
          style: {
            fontSize: "30px",
            colors: ["#d3d3d3"],
          },
        },
      },

      pmChart: {
        series: [
          {
            data: [...this.$store.getters.pmValue],
          },
        ],
        chartOptions: {
          chart: {
            id: "barChart",
            type: "bar",
            height: 250,

            events: {
              click: function (event, chartContext, config) {
                console.log(config);
                if (config.dataPointIndex < 0) {
                  var meters1 = event.target.firstChild.data;
                  var s = Object.entries(meters1);
                  if (s[2].includes(" ")) {
                    delete s[2];
                  }
                  if (s[3].includes("0")) {
                    delete s[3];
                  }
                  console.log(s);
                  var t = [];
                  s.forEach((element) => t.push(element[1]));
                  var z = t.join("").toLowerCase();
                  store.dispatch("changeRoute", z);
                  store.dispatch("fetchGaugeData");
                  store.dispatch("fetchLineData");
                  store.dispatch("fetchBarData");
                  router.push({
                    path: `${z}`,
                    query: {
                      startDate: `${store.state.starting}`,
                      endDate: `${store.state.ending}`,
                    },
                  });
                }
              },
            },
          },
          xaxis: {
            type: "date",
            labels: {},
            //categories:[...this.newNames],
            categories: [...this.$store.getters.pmName],
          },

          title: {
            text: "Energy (kW)",
            color: "#7f7370",
          },
          dataLabels: {
            enabled: true,

            offsetY: 0,
            style: {
              fontSize: "30px",
              colors: ["#d3d3d3"],
            },
          },
        },
      },
    };
  },
  methods: {
    ...mapActions(["fetchBarData"]),
    setBarChart() {
      setInterval(() => {
        this.updateChart();
      }, 1);
    },
    setPmChart() {
      setInterval(() => {
        this.updatePmChart();
      }, 1);
    },
    updatePmChart() {
      this.pmChart = {
        series: [
          {
            data: [...this.$store.getters.pmValue],
          },
        ],
        chartOptions: {
          chart: {
            id: "barChart",
            type: "bar",
            height: 250,

            events: {
              click: function (event, chartContext, config) {
                console.log(config.dataPointIndex);
                if (config.dataPointIndex < 0) {
                  var meters1 = event.target.firstChild.data;
                  var s = Object.entries(meters1);
                  if (s[2].includes(" ")) {
                    delete s[2];
                  }
                  if (s[3].includes("0")) {
                    delete s[3];
                  }
                  console.log(s);
                  var t = [];
                  s.forEach((element) => t.push(element[1]));
                  var z = t.join("").toLowerCase();
                  store.dispatch("changeRoute", z);
                  store.dispatch("fetchGaugeData");
                  store.dispatch("fetchLineData");
                  store.dispatch("fetchBarData");
                  router.push({
                    path: `${z}`,
                    query: {
                      startDate: `${store.state.starting}`,
                      endDate: `${store.state.ending}`,
                    },
                  });
                } else if (config.dataPointIndex >= 0) {
                  var meters1 = config.globals.labels[config.dataPointIndex];
                  var s = Object.entries(meters1);
                  if (s[2].includes(" ")) {
                    delete s[2];
                  }
                  if (s[3].includes("0")) {
                    delete s[3];
                  }
                  console.log(s);
                  var t = [];
                  s.forEach((element) => t.push(element[1]));
                  var z = t.join("").toLowerCase();
                  store.dispatch("changeRoute", z);
                  store.dispatch("fetchGaugeData");
                  store.dispatch("fetchLineData");
                  store.dispatch("fetchBarData");
                  router.push({
                    path: `${z}`,
                    query: {
                      startDate: `${store.state.starting}`,
                      endDate: `${store.state.ending}`,
                    },
                  });
                }
              },
            },
          },
          xaxis: {
            type: "date",
            labels: {},
            //categories:[...this.newNames],
            categories: [...this.$store.getters.pmName],
          },

          dataLabels: {
            enabled: true,

            offsetY: 0,
            style: {
              fontSize: "30px",
              colors: ["#d3d3d3"],
            },
          },
          title: {
            text: "Energy (kW)",
            color: "#7f7370",
          },
          dataLabels: {
            enabled: true,

            offsetY: 0,
            style: {
              fontSize: "30px",
              colors: ["#d3d3d3"],
            },
          },
        },
      };
    },

    updateChart() {
      (this.series = [
        {
          data: [...this.$store.getters.allValues],
        },
      ]),
        (this.chartOptions = {
          chart: {
            id: "barChart",
            type: "bar",
            height: 250,
            events: {
              click: function (event, chartContext, config) {
                console.log(config.dataPointIndex);
                if (config.dataPointIndex < 0) {
                  var meters1 = event.target.firstChild.data;
                  var s = Object.entries(meters1);
                  if (s[2].includes(" ")) {
                    delete s[2];
                  }
                  if (s[3].includes("0")) {
                    delete s[3];
                  }
                  console.log(s);
                  var t = [];
                  s.forEach((element) => t.push(element[1]));
                  var z = t.join("").toLowerCase();
                  store.dispatch("changeRoute", z);
                  store.dispatch("fetchGaugeData");
                  store.dispatch("fetchLineData");
                  store.dispatch("fetchBarData");
                  router.push({
                    path: `${z}`,
                    query: {
                      startDate: `${store.state.starting}`,
                      endDate: `${store.state.ending}`,
                    },
                  });
                } else if (config.dataPointIndex >= 0) {
                  var meters2 = config.globals.labels[config.dataPointIndex];
                  console.log(config.globals.labels);
                  var s = Object.entries(meters2);
                  if (s[2].includes(" ")) {
                    delete s[2];
                  }
                  if (s[3].includes("0")) {
                    delete s[3];
                  }
                  console.log(s);
                  var t = [];
                  s.forEach((element) => t.push(element[1]));
                  var z = t.join("").toLowerCase();
                  store.dispatch("changeRoute", z);
                  store.dispatch("fetchGaugeData");
                  store.dispatch("fetchLineData");
                  store.dispatch("fetchBarData");
                  router.push({
                    path: `${z}`,
                    query: {
                      startDate: `${store.state.starting}`,
                      endDate: `${store.state.ending}`,
                    },
                  });
                }
              },
            },
          },
          xaxis: {
            type: "date",
            labels: {},
            categories: [...this.$store.getters.allNames],
          },

          title: {
            text: "Energy (kW)",
            color: "#7f7370",
          },
        });
    },
  },
  computed: { ...mapGetters(["allNames", "allValues", "allBarData"]) },

  created() {
    this.$store.dispatch("fetchBarData");
    setInterval(() => {
      this.fetchBarData();
    }, 300000);

    for (let i = 0; i < this.pm4.length; i++) {
      this.pm4Names.push(this.pm4[i].name);
      this.pm4Values.push(this.pm4[i].value);
    }
    this.$store.dispatch("changePmName", this.pm4Names);
    console.log("The names are " + this.$store.getters.pmValue);

    this.$store.dispatch("changePmValues", this.pm4Values);
    console.log("The values are" + this.$store.getters.pmName);
  },
  mounted() {
    this.$store.dispatch("fetchBarData");
    this.setBarChart();
    this.setPmChart();
  },
};
</script>

<style scoped>
#barChart {
}
.apexcharts-tooltip-title {
}
.card-header {
  color: blue;
}
</style>