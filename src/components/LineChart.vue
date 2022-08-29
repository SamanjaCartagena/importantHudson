<template>
  <div>
   
        <div v-if="this.$store.getters.currentRoutes !='pm4'">

                        <el-card class="box-card" style="width:100%">


       <apexchart
        width="100%" height="250px" type="area" 
        :options="this.lineCharts.chartOptions" :series="[...this.allLineData]" >
      </apexchart>
                        </el-card>
 </div>
 <div v-else>
   <el-card style="height:250px; width:100%">
   <span>Power KW</span>
   <el-card style="height:200px;width:100%">
   <center><span style="position:relative; top:30%">No Data</span></center> 
     
   </el-card>
   </el-card>
 </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
//import dateFormat from "dateformat";
import moment from 'moment';
import pm4json from '../../pm4.json'

export default {
  data(){
    return{
            moment:moment,
      names:[],
      data:[],
      dates:[], 
      d:[], 
      pm4:pm4json,
      lineCharts:{
        series:[
          {name:'',data:[]}
        ],
        
        
        
          chartOptions: {
            chart: {
              height: 250,
              type: 'area',
              width:"100%",
              animations:{
                enabled:false
              },
          
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800']
   
  },
  
            title:{
              text:"Power (KW)"
            },
            stroke: {
              curve: 'smooth',
              width:1.2,
              colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800']
              
            },
            
            legend:{
                fontSize:'16px',
              labels:{
                              colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800','orange'],
                              
              }
            },
            markers:{
                            colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800']
            },
          
            xaxis: {
              type: 'datetime',
               offsetX: 0,
          offsetY: 0,
              labels: {
                    datetimeUTC: false,
                    format: 'MMM dd HH:mm',
                    offsetX: 0,
          offsetY: 0,     
          axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },
                    
          style:{
                      fontSize:'12px'
                    },
                  },
                 
                     
                        categories:[...this.$store.getters.allLineDates],
                       enabled: true,
                       x: { format: "dd MMM yyyy HH:mm" },
                       theme: 'light',
                   colors: ["#7EB26D", "#E9B839", "#6ED0E0", "#EF853C"],
            },
             tooltip: {
               enabled: true,
                x: { format: "dd MMM yyyy HH:mm" },
               theme: 'light',
              x: {
              },
            },
          }
   }
    }
  },
 methods:{
    ...mapActions(['fetchLineData', 'fetchLineDates']),
       moment: function (value) {
    return moment(value);
  },
   setLineChart(){
      setInterval(()=>{
        this.updateChart()
      },50)
    },
    updateChart(){
      if(this.$store.getters.currentRoutes !='pm4'){
      this.lineCharts={
       series:[
          {name:'',data:[]}
        ],
        
        
          chartOptions: {
            chart: {
              height: 250,
              type: 'area',
              width:"100%",
              animations:{
                enabled:false
              },
          
            },
            dataLabels: {
              enabled: false
            },
            fill: {
              colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800']
   
  },
  
            title:{
              text:"Power (KW)"
            },
            stroke: {
              curve: 'smooth',
              width:1.2,
              colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800']
              
            },
            
            legend:{
                fontSize:'16px',
              labels:{
                              colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800','orange'],
                              
              }
            },
            markers:{
                            colors:['#8eb77e', '#ebbe4f', '#80d3e4', '#f0944a', '#FF9800']
            },
          
            xaxis: {
              type: 'datetime',
               offsetX: 0,
          offsetY: 0,
              labels: {
                    datetimeUTC: false,
                    format: 'MMM dd HH:mm',
                    offsetX: 0,
          offsetY: 0,     
          axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#78909C',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },
                    
          style:{
                      fontSize:'12px'
                    },
                  },
                 
                     
                        categories:[...this.allLineDates],
                       enabled: true,
                       x: { format: "dd MMM yyyy HH:mm" },
                       theme: 'light',
                   colors: ["#7EB26D", "#E9B839", "#6ED0E0", "#EF853C"],
            },
             tooltip: {
               enabled: true,
                x: { format: "dd MMM yyyy HH:mm" },
               theme: 'light',
              x: {
              },
            },
          }
    }
      }

    }
  },
   computed:{...mapGetters(['allLineData', 'allLineDates']),
     
  
   },
  
     created(){
           this.$store.dispatch('fetchLineData')
          setInterval(()=>{this.fetchLineData()},300000)
  
      for(let i=0; i<this.allLineData.length; i++){
  
        this.names.push(this.allLineData[i])
        this.data.push(this.allLineData[i].data)
      }
       for(let i=0; i<this.allLineDates.length; i++){
         this.dates.push(this.allLineDates[i])
         
       }

},
mounted(){
        this.$store.dispatch('fetchLineData')
                              this.setLineChart();

}
}
</script>

<style>
</style>