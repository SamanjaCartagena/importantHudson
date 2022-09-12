<template>
  <div>
    <div v-if="this.$store.getters.currentRoutes != 'pm4'">
      <el-row :gutter="20">
        <el-col
          :span="this.gaugeWidth"
          v-for="(item, index) in arr"
          :key="index"
        >
          <el-card style="border: 0.02px solid #c7c7c7; border-radius: 0px">
            <div class="card-header">
              <span style="font-size: 16px; position: relative; top: 20px">{{
                item.name.slice(6, 11).split("_").join(" ").split("0").join("")
              }}</span>

              <apexchart
                id="gaugeChartApex"
                type="radialBar"
                width="100%"
                height="250px"
                :options="this.radialChartOptions.chartOptions"
                :series="[
                  Math.round((item.value[item.value.length - 1] * 100) / 400),
                ]"
                >{{}}</apexchart
              >
              <center>
                <center>
                  <span
                    style="
                      font-size: 17px;
                      color: #fd354a;
                      position: relative;
                      bottom: 70px;
                    "
                    v-if="
                      Math.round(
                        (item.value[item.value.length - 1] * 100) / 400
                      ) > 100
                    "
                    >{{
                      Math.round(
                        (item.value[item.value.length - 1] * 100) / 400
                      )
                    }}%</span
                  >
                  <span
                    style="
                      font-size: 17px;
                      color: #009af9;
                      position: relative;
                      bottom: 70px;
                    "
                    v-else
                    >{{
                      Math.round(
                        (item.value[item.value.length - 1] * 100) / 400
                      )
                    }}%</span
                  >
                </center>
                <span
                  v-if="
                    Math.round(
                      (item.value[item.value.length - 1] * 100) / 400
                    ) > 100
                  "
                  style="
                    position: relative;
                    font-weight: bold;
                    font-size: 33px;
                    color: #fd354a;
                    bottom: 80px;
                  "
                  >{{ Math.round(item.value[item.value.length - 1]) }}</span
                >
                <span
                  v-else
                  style="
                    position: relative;
                    font-size: 33px;
                    font-weight: bold;
                    color: #009af9;
                    bottom: 80px;
                  "
                  >{{ Math.round(item.value[item.value.length - 1]) }}</span
                >
              </center>
            </div>
            <small>Power (kW) Meter</small>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <el-row :gutter="20">
        <el-col
          :span="this.gaugeWidth"
          v-for="(item, index) in pm4"
          :key="index"
        >
          <el-card style="border: 0.02px solid #c7c7c7; border-radius: 0px">
            <div class="card-header">
              <span style="font-size: 16px; position: relative; top: 20px">{{
                item.name
              }}</span>

              <apexchart
                id="gaugeChartApex"
                type="radialBar"
                width="100%"
                height="250px"
                :options="this.radialChartOptions.chartOptions"
                :series="[
                  item.value,
                ]"
                ></apexchart
              >
              <center>
                <center>
                  <span
                    style="
                      font-size: 17px;
                      color: #fd354a;
                      position: relative;
                      bottom: 70px;
                    "
                    v-if="
                      Math.round(
                        (item.value[item.value.length - 1] * 100) / 400
                      ) > 100
                    "
                    >{{
                      Math.round(
                        (item.value[item.value.length - 1] * 100) / 400
                      )
                    }}%</span
                  >
                  <span
                    style="
                      font-size: 17px;
                      color: #009af9;
                      position: relative;
                      bottom: 70px;
                    "
                    v-else
                    >{{
                      Math.round(
                        (item.value[item.value.length - 1] * 100) / 400
                      )
                    }}%</span
                  >
                </center>
                <span
                  v-if="
                    Math.round(
                      (item.value[item.value.length - 1] * 100) / 400
                    ) > 100
                  "
                  style="
                    position: relative;
                    font-weight: bold;
                    font-size: 33px;
                    color: #fd354a;
                    bottom: 80px;
                  "
                  >{{ Math.round(item.value[item.value.length - 1]) }}</span
                >
                <span
                  v-else
                  style="
                    position: relative;
                    font-size: 33px;
                    font-weight: bold;
                    color: #009af9;
                    bottom: 80px;
                  "
                  >{{ Math.round(item.value[item.value.length - 1]) }}</span
                >
              </center>
            </div>
            <small>Power (kW) Meter</small>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pm4json from "../../pm4.json";

export default {
  name: "GaugeChart",
  data() {
    return {
      newArr: [],
      arr: [],
      lastValues: [],
      newDate: "",
      pm4: pm4json,
      pm4Values: [],
      pm4Values1: [],

      gaugeWidth: "",
      dateTesting: "May 9, 2022",
    };
  },
  methods: {
    ...mapActions(["fetchGaugeData", "fetchBarData"]),
    setGaugeChart() {
      setInterval(() => {
        this.updateChart();
      }, 0.05);
    },
    updateChart() {
      this.arr = [];
      this.newArr = Object.entries(this.allGaugeData);
      this.newArr.sort();
      this.newArr.forEach((element) => this.arr.push(element[1]));

      this.gaugeWidth = 24 / this.arr.length;
    },
  },
  computed: { ...mapGetters(["allGaugeData", "allBarData"]) },
  mounted() {
    this.$store.dispatch("fetchGaugeData");
    this.setGaugeChart();
  },

  created() {
    this.$store.dispatch("fetchGaugeData");

    setInterval(() => {
      this.fetchGaugeData();
    }, 300000);

    this.newArr = Object.entries(this.allGaugeData);
    this.newArr.sort();

    this.newArr.forEach((element) => this.arr.push(element[1]));

    this.gaugeWidth = 24 / this.arr.length;

    this.radialChartOptions = {
      series: [],

      chartOptions: {
        chart: {
          type: "radialBar",
          height: 200,
          offsetY: -20,

          animations: {
            enabled: false,
            easing: "linear",
            speed: 12800,
          },
          sparkline: {
            enabled: true,
          },
        },
        noData: {
          text: undefined,
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "14px",
            fontFamily: undefined,
          },
        },
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "40%",
            },
            startAngle: -90,
            endAngle: 90,
            offsetX: 0,
            offsetY: 0,

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: 0,
                show: false,

                fontSize: "30px",
              },
              value: {
                fontSize: "15px",
                show: false,
              },
            },
          },
        },
        grid: {
          padding: {
            top: -20,
          },
        },
        fill: {
          type: "gradient",

          gradient: {
            shade: "light",
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91],
          },
        },
        labels: [],
        colors: [
          function ({ value }) {
            if (value > 100) {
              return "#FD354A";
            } else {
              return "#009AF9";
            }
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
span {
  font-size: 36px;
  position: relative;
  bottom: 50px;
}
.meter {
}
#gaugeChartApex {
}
.box-card {
  height: 80px;
}
.card-header {
  height: 100px;
  position: relative;
  bottom: 20px;
}
small {
  font-size: 12px;
}
</style>