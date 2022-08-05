<template>
 
    <div >
         <el-card class="box-card" style="width:100%">\
          <a href="">
         <apexchart  id="barChartData" type="bar" height="380" :options="this.chartOptions"  :series="series">

         </apexchart> 

          </a>
                         </el-card>
  </div>
   
  
       
       
  
 
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import moment from 'moment'
export default {
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
      newDates:[],
      
        
       
          series: [{
           
            data:[...this.$store.getters.allValues],
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
             categories:[...this.$store.getters.allNames]
            
            },
           
           
            title: {
                text: 'Energy (kW)',
                color:'#7f7370'
            },
            
          }
   
          
    }
    
  },
   methods:{
    ...mapActions(['fetchBarData']),
  },
   computed:{...mapGetters(['allNames','allValues','allBarData']),
   
   },
   
   created(){
    // console.log("The date range is "+this.daterange)
          this.$store.dispatch('fetchBarData')
                   // this.$store.dispatch('calcData')
           setInterval(()=>{this.fetchBarData()},300000)
           
      //    console.log("The new bar data is")
    //  console.log(this.allBarData)
  
   },
   mounted(){
   }
}
</script>

<style>
</style>