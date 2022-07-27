<template>
  <div class="common-layout">
    <el-container>
      <el-header>

        <nav-bar></nav-bar>
      </el-header>
      <br/>
    <el-main  style="height:auto;width:100%;position:relative;top:100px;">
    {{this.$route.params.pageName}}
      <date-component style="float: right;"></date-component>
      <br/>
      <br/>
      <gauge-chart></gauge-chart>
      <br/>
      <line-chart></line-chart>
      <br/>
      <bar-chart></bar-chart>
    </el-main>
   <br/><br/>
<el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import DateComponent from './DateComponent.vue';
import GaugeChart from './GaugeChart.vue';
import LineChart from './LineChart.vue';
import BarChart from './BarChart.vue'
export default{
components:{
    NavBar,
    DateComponent,
    GaugeChart, LineChart, BarChart
}
}

</script>

