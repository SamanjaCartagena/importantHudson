<template>
  <div>
   
    <div v-if="this.$store.getters.currentRoutes != 'pm4'">
      <el-card class="box-card" style="width: 100%;border: 0.02px solid #c7c7c7; border-radius:0px">
        <apexchart
          width="100%"
          height="250px"
          type="area"
          :options="this.lineCharts.chartOptions"
          :series="this.lineCharts.chartOptions.series"
          @mouseover="values"
          @mouseleave="setAgain"
        >
        </apexchart>
        <div id="box"></div>
      </el-card>
    </div>
    <div v-else>
      <el-card style="height: 250px; width: 100%;border: 0.02px solid #c7c7c7; border-radius:0px">
        <span>Power KW</span>
        <el-card style="height: 200px; width: 100%">
          <center>
            <span style="position: relative; top: 30%">No Data</span>
          </center>
        </el-card>
      </el-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pm4json from "../../pm4.json";
import store from "../store";
export default {
  data() {
    return {
      names: [],
      data: [],
      dates: [],
      interval: "",
      d: [],
      pm4: pm4json,
      lineCharts: {
        chartOptions: {
          chart: {
            type: "area",
            height: 250,
            width: "100%",
            animations: {
              enabled: false,
            },
            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
              tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true | '<img src="/static/icons/reset.png" width="20">',
                customIcons: [],
              },
              export: {
                csv: {
                  filename: undefined,
                  columnDelimiter: ",",
                  headerCategory: "category",
                  headerValue: "value",
                  dateFormatter(timestamp) {
                    console.log(timestamp);
                    var dt = new Date(timestamp).toDateString();
                    var tm = new Date(timestamp).toTimeString();
                    return dt + " " + tm;
                  },
                },
                svg: {
                  filename: undefined,
                },
                png: {
                  filename: undefined,
                },
              },
              autoSelected: "zoom",
            },
          },

          markers: {
            size: 0,
          },
          dataLabels: {
            enabled: false,
          },
          title: {
            text: "Power (kW)",
            color: "#7f7370",
          },
          stroke: {
            width: 1.2,
          },
          series: [...this.$store.getters.allLineData],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 0.3,
              opacityFrom: 0.3,
              opacityTo: 1,
              stops: [100, 100, 100],
            },
          },
          // format Names of datapoints xAxis under the Date and Time
          legend: {
            fontSize: "16px",
          },
          // format xAxis
          xaxis: {
            categories: [...this.$store.getters.allLineDates],
            type: "datetime",
            labels: {
              datetimeUTC: false,
              format: "MMM dd HH:mm",
              style: {
                fontSize: "12px",
              },
            },
          },
          // dialogbox title
          tooltip: {
            enabled: true,
            x: { format: "dd MMM yyyy HH:mm" },
            theme: "light",
          },
          colors: ["#7EB26D", "#E9B839", "#6ED0E0", "#EF853C"],
          yaxis: [
            {
              title: {
                text: "kW",
              },
              labels: {
                formatter: function (value) {
                  return value;
                },
              },
            },
          ],
          // Show NO DATA if no data from DB
          noData: {
            text: "No Data",
            align: "center",
            verticalAlign: "middle",
            offsetX: 0,
            offsetY: 0,
            style: {
              color: undefined,
              fontSize: "18px",
              fontFamily: undefined,
            },
          },
        },
      },
    };
  },
  methods: {
    ...mapActions(["fetchGaugeData"]),

    setLineChart() {
      this.interval = setInterval(() => {
        this.updateChart();
      }, 0.05);
    },
    values() {
      clearInterval(this.interval);
    },
    setAgain() {
      this.setLineChart();
    },
    updateChart() {
      if (this.$store.getters.currentRoutes != "pm4") {
        this.lineCharts = {
          chartOptions: {
            chart: {
              type: "area",
              height: 250,
              width: "100%",
              animations: {
                enabled: false,
              },
              toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                  download: true,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                  reset:
                    true | '<img src="/static/icons/reset.png" width="20">',
                  customIcons: [],
                },
                export: {
                  csv: {
                    filename: undefined,
                    columnDelimiter: ",",
                    headerCategory: "category",
                    headerValue: "value",
                    dateFormatter(timestamp) {
                      console.log(timestamp);
                      var dt = new Date(timestamp).toDateString();
                      var tm = new Date(timestamp).toTimeString();
                      return dt + " " + tm;
                    },
                  },
                  svg: {
                    filename: undefined,
                  },
                  png: {
                    filename: undefined,
                  },
                },
                autoSelected: "zoom",
              },
            },

            markers: {
              size: 0,
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              width: 1.2,
            },
            series: [...this.allLineData],
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 0.3,
                opacityFrom: 0.3,
                opacityTo: 1,
                stops: [100, 100, 100],
              },
            },
            // format Names of datapoints xAxis under the Date and Time
            legend: {
              fontSize: "16px",
            },
            // format xAxis
            xaxis: {
              categories: [...this.$store.getters.allLineDates],
              type: "datetime",
              labels: {
                datetimeUTC: false,
                format: "MMM dd HH:mm",
                style: {
                  fontSize: "12px",
                },
              },
            },
            // dialogbox title
            tooltip: {
              enabled: true,
              x: { format: "dd MMM yyyy HH:mm" },
              theme: "light",
            },
            colors: ["#7EB26D", "#E9B839", "#6ED0E0", "#EF853C"],
            yaxis: [
              {
                title: {
                  text: "kW",
                },
                labels: {
                  formatter: function (value) {
                    return value;
                  },
                },
              },
            ],
            // Show NO DATA if no data from DB
            noData: {
              text: "No Data",
              align: "center",
              verticalAlign: "middle",
              offsetX: 0,
              offsetY: 0,
              style: {
                color: undefined,
                fontSize: "18px",
                fontFamily: undefined,
              },
            },
          },
        };
      }
    },
  },
  computed: { ...mapGetters(["allLineData", "allLineDates"]) },

  created() {
    this.$store.dispatch("fetchGaugeData");
    setInterval(() => {
      this.fetchGaugeData();
    }, 300000);
  },
  mounted() {
    this.$store.dispatch("fetchGaugeData");
    this.setLineChart();
  },
};
</script>

<style>
.apexcharts-tooltip apexcharts-theme-light apexcharts-active {
  background-color: yellow;
}
</style>