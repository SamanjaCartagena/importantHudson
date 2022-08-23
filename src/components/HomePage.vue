<template>

  <div class="common-layout" >
    <el-container style="background-color:#f3f3f4;">
     <el-header style=" background-color:transparent; height: 200px; width:98%;">
        <el-card  class="box-card" style="width:100%; position:relative; top:30px; color:#676a6c; z-index:0;">

       <div style="display:flex; position: relative; z-index:0;
       height:100px; width:100%; background-color: white;">
        <h3 style="position:relative; left:25px; z-index:3; top:25px;">{{page}} Dashboard</h3>

      <date-component style="position: absolute; right:25px; top:25px;"></date-component>
       </div>
      <bread-crumb style="position: relative; bottom:20px; left:25px" :page="page"></bread-crumb>

       </el-card>
     </el-header>
     
     
    <el-main  style="height:auto;width:100%;position:relative;top:100px;">
      <br/>
      <br/>
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
import DateComponent from './DateComponent.vue';
import GaugeChart from './GaugeChart.vue';
import LineChart from './LineChart.vue';
import BarChart from './BarChart.vue';
import EquipmentPage from './EquipmentPage.vue';
import BreadCrumb from './BreadCrumb.vue';
export default {
  name:'HomePage',
  data(){
   return {
    
   }
  },
 
  
components:{
    DateComponent,
    GaugeChart,
    LineChart,
    BarChart,
    EquipmentPage,
    BreadCrumb
    
},
computed:{
  page(){
   var a= Object.entries(this.$route.params.pageName)
   let b=[];
    for(let i=0; i<a.length; i++){
      b.push(a[i])
    }
    var s=[]
    b.forEach(element => s.push(element[1]))
    var t = s.join('')
    var u = t.toUpperCase()
   this.$store.dispatch('changeRoutePage',t)

    //console.log("The route is "+this.$store.getters.routePage)
   


   return u
}
},
created(){
  console.log(this.$route.params.pageName)
},


    
  }

</script>
<style scoped>
</style>