<template>
 
    <div >
                         <el-card class="box-card" style="width:100%">
             
         <apexchart  id="barChartData" type="bar" height="380" :options="this.barChart.chartOptions" :series="this.barChart.series">

         </apexchart> 
      
                         </el-card>
  </div>
   
  
       
       
  
 
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import moment from 'moment'
export default {
   props:['daterange'],
  data(){
    return{
      moment:moment,
      arr:[],
      dataValue:[],
      dataName:[],
      newArr:[], 
      newNames:[],
      finalValues:[],
      datesNow:[],
      newDates:[]
      
    }
  },
   methods:{
    ...mapActions(['fetchBarData']),
   
    
  },
   computed:{...mapGetters(['allBarData','allNames','allValues'])

   },
   created(){
    // console.log("The date range is "+this.daterange)
          this.$store.dispatch('fetchBarData')

           setInterval(()=>{this.fetchBarData()},300000)
   
      //    console.log("The new bar data is")
    //  console.log(this.allBarData)

      this.barChart={
      
        
          
          series: [{
           
            data:[...this.allValues],
      }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 380,
            },
            xaxis: {
              type: 'date',
              labels:{},
              //categories:[...this.newNames],
             categories:[...this.allNames]
            
            },
           
           
            title: {
                text: 'Energy (kW)',
                color:'#7f7370'
            },
            
          
   }
      }
   }

}
</script>

<style>


</style>