<template>

  <div class="common-layout" >
    <el-container style="background-color:#f3f3f4;">
    <el-main  style="height:auto;width:100%;position:relative;top:100px;">
                       <el-card  class="box-card" style="width:100%; color:#676a6c">

       <div style="display:flex; position: relative; bottom:30px; z-index:0;
       height:80px; width:100%; background-color: white;">
        <h3 style="position:relative; left:25px; z-index:3; top:30px;">{{page}} Dashboard</h3>
    
      <date-component style="position: absolute; right:0; top:30px;"></date-component>
       </div>
       </el-card>
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
},

created(){
  console.log(this.$route.params.pageName)
},
methods:{
  
}, 

    
  }
}
</script>
<style scoped>
</style>