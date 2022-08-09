<template>
 
    <div >
         <el-card class="box-card" style="width:100%">
         <apexchart ref="demoChart" id="barChart" type="bar" height="380" :options="this.chartOptions"  :series="this.series"
         @click="selected"
         >
          
         </apexchart> 

                         </el-card>
  </div>
   
  
       
       
  
 
</template>

<script>
import {mapGetters, mapActions} from 'vuex';


export default {
  data(){
    return{
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
              id:'barChart',
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
    setBarChart(){
      setInterval(()=>{
        this.updateChart()
      },3000)
    },
    selectedBar(){
     console.log("The bar chart clicked is "+this.$refs.demoChart.value)
    },
    updateChart(){
        
         
          this.series=[{
           
            data:[...this.$store.getters.allValues],
      }],
        this.chartOptions={
              chart: {
              id:'barChart',
              type: 'bar',
              height: 380,
              dataLabels:{
                
      fontSize: '40px',
      
              
            },
            
            xaxis: {
              type: 'date',
               style: {
      fontSize: '100px',
      fontFamily: 'Helvetica, Arial, sans-serif',
      fontWeight: 'bold',
      colors: undefined
  },
              labels:{
              },
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
   computed:{...mapGetters(['allNames','allValues','allBarData']),
   
   },
   
   created(){
    // console.log("The date range is "+this.daterange)
        this.$store.dispatch('fetchBarData')
                   // this.$store.dispatch('calcData')
           setInterval(()=>{this.fetchBarData()},300000)
          
                
    },
   mounted(){
               this.$store.dispatch('fetchBarData')
                      this.setBarChart();

   }
}
</script>

<style>
</style>