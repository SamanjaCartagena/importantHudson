<template>
 
  <div class="common-layout" >
    <el-container>
      <el-header>
        <nav-bar></nav-bar>
        <br/>
      </el-header>
      <br/>
    <el-main  style="height:auto;width:100%;position:relative;top:100px;">
    <h3 style="position:relative; left:25px;">{{page}} Dashboard</h3>

      <date-component style="float: right;"></date-component>
      <br/>
      <br/>
      <gauge-chart></gauge-chart>
      <br/>
      <line-chart></line-chart>
      <br/>
      <bar-chart></bar-chart>
      <br/>
      <equipment-page v-if="this.$store.getters.currentRoutes =='pm1'"></equipment-page>
    </el-main>
   <br/><br/>
    </el-container>
  </div>
</template>

<script >
import NavBar from './NavBar.vue';
import BreadCrumb from './BreadCrumb.vue';
import DateComponent from './DateComponent.vue';
import GaugeChart from './GaugeChart.vue';
import LineChart from './LineChart.vue';
import BarChart from './BarChart.vue';
import NotFound from './NotFound.vue';
import EquipmentPage from './EquipmentPage.vue';
export default {
  name:'HomePage',
  data(){
   return {
   }
  },
components:{
    NavBar,
    DateComponent,
    GaugeChart,
    LineChart,
    BarChart,
    BreadCrumb,
    NotFound,
    EquipmentPage,
    EquipmentPage
},
computed:{
  page(){
    
    return this.$route.params.pageName
    },
   
  }
} 
</script>