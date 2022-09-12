<template>
  <div class="common-layout">
    <el-container style="background-color: #f3f3f4">
      <el-header
        style="background-color: transparent; height: 200px; width: 98%"
      >
        <div
          style="
            display: flex;
            position: relative;
            z-index: 0;
            top: 50px;

            height: 100px;
            width: 100%;
            background-color: white;
            z-index: 0;
            border: 0.02px solid #c7c7c7;
          "
        >
          <h3
            style="
              position: relative;
              left: 25px;
              z-index: 3;
              color: #505050;
              top: 25px;
            "
          >
            {{ page }} Dashboard
          </h3>

          <date-component
            style="position: absolute; right: 25px; top: 25px"
          ></date-component>
        </div>
        <bread-crumb
          style="position: relative; top: 10px; left: 25px"
          :page="page"
        ></bread-crumb>
      </el-header>

      <el-main
        style="height: auto; width: 100%; position: relative; top: 130px"
      >
        <br />
        
        <gauge-chart></gauge-chart>
        <br />
        <line-chart></line-chart>
        <br />
        <bar-chart></bar-chart>
        <br />
        <equipment-page></equipment-page>
      </el-main>

      <br /><br />
    </el-container>
  </div>
</template>

<script>
import DateComponent from "./DateComponent.vue";
import GaugeChart from "./GaugeChart.vue";
import LineChart from "./LineChart.vue";
import BarChart from "./BarChart.vue";
import EquipmentPage from "./EquipmentPage.vue";
import BreadCrumb from "./BreadCrumb.vue";

export default {
  name: "HomePage",
  data() {
    return {};
  },

  components: {
    DateComponent,
    GaugeChart,
    LineChart,
    BarChart,
    EquipmentPage,
    BreadCrumb,
  },
  computed: {
    page() {
      var a = Object.entries(this.$route.params.pageName);
      let b = [];
      for (let i = 0; i < a.length; i++) {
        b.push(a[i]);
      }
      var s = [];
      b.forEach((element) => s.push(element[1]));

      var t = s.join("");

      var u = t.toUpperCase();
      this.$store.dispatch("changeRoutePage", t);

      return u;
    },
  },
  created() {
    console.log(this.$route.params.pageName);
  },
};
</script>
<style scoped></style>