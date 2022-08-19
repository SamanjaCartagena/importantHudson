<template>

  <div class="common-layout" >
    <el-container>

      <el-header>
      </el-header>

    <el-main  style="height:auto;width:100%;position:relative;top:100px;">

    <h3 style="position:relative; left:25px;">{{page}} Dashboard</h3>
      <date-component style="float: right;"></date-component>

      <br/>
      <gauge-chart></gauge-chart>
      <br/>
      <line-chart></line-chart>
      <br/>
      <bar-chart></bar-chart>
      <br/>
      <equipment-page></equipment-page>
    </el-main>


   <br/><br/>
    </el-container>
  </div>
</template>

<script >
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
    t:[]
   }
  },
components:{
    
    DateComponent,
    GaugeChart,
    LineChart,
    BarChart,
    BreadCrumb,
    NotFound,
    EquipmentPage,
    
},
computed:{
  page(){
  //  var p = Object.entries(this.$route.params.pageName)
    //var n=[]
    //p.forEach(element =>n.push(element[1]))
   // console.log(n)
   return this.$route.params.pageName
},
    
  }
}
</script>
<style scoped>
</style>