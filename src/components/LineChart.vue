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
  props:['dateValue','daterange'],
  data(){
    return{
            moment:moment,
      lineCharts:[],
      names:[],
      data:[],
      dates:[], 
      d:[], 
      refValue:''
    }
  },
 methods:{
    ...mapActions(['fetchLineData', 'fetchLineDates']),
       moment: function (value) {
    return moment(value);
  },
    submitted(){
       this.refValue=this.$refs.textInside.value;
    }
   

  },

   computed:{...mapGetters(['allLineData', 'allLineDates']),
     
  
   },
  
     created(){
     this.fetchLineData();
     this.fetchLineDates();
          setInterval(()=>{this.fetchLineData()},5000)
          setInterval(()=>{this.fetchLineDates()},5000)
  // console.log(this.dataValue)
      for(let i=0; i<this.allLineData.length; i++){
      //  console.table(this.allLineData[i])
     //   console.log(this.allLineData[i].name)
     //   console.log(this.allLineData[i].data)
        this.names.push(this.allLineData[i])
        this.data.push(this.allLineData[i].data)
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
        

       
       // const m = moment(this.dates[0])
           //  console.log(m.format('ddd MMM  YYY'))

        //console.log("The ISO string date is "+this.dates[0])
       // console.log(...this.dates.toString())
   //   console.log("The first date value is "+this.allLineDates[0])
    //  for(let i=0; i<this.allLineDates.length;i++){
      //  this.dates.push(this.allLineDates[i])
      //}
      
//console.log(this.dates.toLocaleString('default',{month:'long'})+" "
    //  +" "+this.dates.getHours()+":"+this.dates.getSeconds())

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
              labels: {
                    datetimeUTC: false,
                    format: 'MMM dd HH:mm',
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
</script>

<style>

</style>