<template>
  <div>
   
    
                        <el-card class="box-card" style="width:100%">

    
       <apexchart
        width="100%" height="500px" type="area" 
        :options="this.lineCharts.chartOptions" :series="[...this.allLineData]" >
      </apexchart>
      
    
                        </el-card>
 
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
//import dateFormat from "dateformat";
import moment from 'moment';
export default {
  data(){
    return{
            moment:moment,
      lineCharts:[],
      names:[],
      data:[],
      dates:[], 
      lineCharts:{
        series:[
          {name:'',data:[]}
        ],
        
        
        
          chartOptions: {
            chart: {
              height: 350,
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
      setLineChart(){
      setInterval(()=>{
        this.updateChart()
      },500)
    },
       updateChart(){
   
           this.lineCharts={
        series:[
          {name:'',data:[]}
        ],
        
        
        
          chartOptions: {
            chart: {
              height: 350,
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
   
  
   computed:{...mapGetters(['allLineData', 'allLineDates']),
     
  
   },
  
     created(){
           this.$store.dispatch('fetchLineData')
          setInterval(()=>{this.fetchLineData()},300000)
  // console.log(this.dataValue)
      for(let i=0; i<this.allLineData.length; i++){
  
        this.names.push(this.allLineData[i])
        this.data.push(this.allLineData[i].data)
        console.log("The data is "+this.data)
      }
       for(let i=0; i<this.allLineDates.length; i++){
         this.dates.push(this.allLineDates[i])
         
       }
    //    console.log("The first date is suppsed to be"+this.dates[0])
     //console.log("Line dates are");
   
// console.log(...this.dates)
        for(let i=0; i<this.dates.length; i++){
        //  console.log(this.dates[i])
      //   var m = moment(this.dates[i])
       
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