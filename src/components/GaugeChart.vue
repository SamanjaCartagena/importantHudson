<template>
  <div>
    <div v-if="this.$store.getters.currentRoutes !='pm4'">
                   <el-card  class="box-card" style="width:100%">
  
          <el-row :gutter="20">
     <el-col :span="this.gaugeWidth" v-for="(item, index) in arr" :key="index">
  <div class="card-header" >
               <span style="font-size:20px; position: relative;
                top:20px">{{item.name.slice(6,11).split('_').join(' ').split('0').join('')}}</span>
            <apexchart id="gaugeChartApex"
          type="radialBar" width="100%" height="250px" 
          :options="this.radialChartOptions.chartOptions"
          
         :series="[Math.trunc((item.value[item.value.length-1])*100/400).toFixed()]" ></apexchart>
         <center>
         <span v-if="Math.trunc((item.value[item.value.length-1])*100/400).toFixed()>100" style="color:#FD354A">{{Math.trunc(item.value[item.value.length-1])}}</span>
          <span v-else style="color:#009AF9">{{Math.trunc(item.value[item.value.length-1])}}</span>
         </center>

         </div>     </el-col>
  </el-row>
  
                      </el-card >
                     
                 
 </div>
<div v-else>
     <el-card  class="box-card" style="width:100%">
    <el-space :fill="fill" wrap>
      <el-card v-for="(item, index) in pm4" :key="index" 
      class="box-card" 
      style="width:250px;height:250px">
          
          <div class="card-header" >
               <span style="font-size:20px; position: relative;
                top:20px">{{item.name}}</span>
            <apexchart id="gaugeChartApex"
          type="radialBar" width="100%" height="250px" 
          :options="this.radialChartOptions.chartOptions"
          
         :series="[item.value]" ></apexchart>
         <center>
         <span style="color:red">No data</span>
         </center>

         </div>
               
      </el-card>
      

    </el-space>
  
                      </el-card >
  </div>
</div>
 
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import moment from 'moment'
import router from '../../src/router'
import pm4json from '../../pm4.json'

export default {
  name:'GaugeChart',
  data(){
   return{
     newArr:[],
     arr:[],
     lastValues:[],
     finalDates:[],
     newDate:'',
     percent:[],
     names:[],
     pm4:pm4json,
     pm4Values:[],
     pm4Values1:[],
     slicedDate:[],
     finalNames:[],
    gaugeWidth:'',
     today:moment().format('MMMM D, YYYY'),
     dateTesting:'May 9, 2022',
   }
  },
  methods:{
    ...mapActions(['fetchGaugeData','fetchBarData']),
     setGaugeChart(){
      setInterval(()=>{
        this.updateChart()
      },500)
     
      },
     updateChart(){
     this.arr=[];
      this.newArr=Object.entries(this.allGaugeData)
     this.newArr.sort()
         this.newArr.forEach(element => this.arr.push(element[1]))
   this.names=[];
   this.finalNames=[];
   this.finalDates=[];
     for(let i=0; i<this.arr.length;i++){
      this.names.push(this.arr[i].name)
      this.finalNames.push(this.names[i].toLowerCase().slice(6,11).split('_').join('').split('0').join(''))
     }

       this.gaugeWidth= 24/(this.arr.length)
           for(let i=0; i<this.arr.length; i++){
for(let j=0; j<this.arr[i].dates.length; j++){
 
}
for(let i=0;i<this.finalDates.lenth;i++){
  this.slicedDate.push(this.finalDates[i].slice(' ').join(''))
}
     }
        
for(let i=0; i<this.arr.length; i++){
}
 
     for(let i=0; i<this.arr.length; i++){
    Math.trunc(this.lastValues.push(this.arr[i].value[this.arr[i].value.length-1]))
    
    
     }
     for(let i=0; i<this.lastValues.length; i++){
      this.percent.push(Math.trunc(this.lastValues[i] *100/400).toFixed())
     }
 
   
  

     },
    
    
 
 
 
  
  
  },
   computed:{...mapGetters(['allGaugeData','allBarData']),
   
 
   },
   mounted(){
        this.$store.dispatch('fetchGaugeData')
        this.setGaugeChart()
   },
   
   created(){
       
      this.$store.dispatch('fetchGaugeData')
      
     setInterval(()=>{this.fetchGaugeData()},300000)
   
     this.newArr=Object.entries(this.allGaugeData)
     this.newArr.sort()
     
 
   
     this.newArr.forEach(element => this.arr.push(element[1]))
   
     for(let i=0; i<this.arr.length;i++){
      this.names.push(this.arr[i].name)
      this.finalNames.push(this.names[i].toLowerCase().slice(6,11).split('_').join('').split('0').join(''))
     }

this.gaugeWidth= 24/(this.arr.length)

     for(let i=0; i<this.arr.length; i++){
for(let j=0; j<this.arr[i].dates.length; j++){
 
}
for(let i=0;i<this.finalDates.lenth;i++){
  this.slicedDate.push(this.finalDates[i].slice(' ').join(''))
}
     }
        
for(let i=0; i<this.arr.length; i++){
}
 
     for(let i=0; i<this.arr.length; i++){
    Math.trunc(this.lastValues.push(this.arr[i].value[this.arr[i].value.length-1]))
    
    
     }
     for(let i=0; i<this.lastValues.length; i++){
      this.percent.push(Math.trunc(this.lastValues[i] *100/400).toFixed())
     }
 
   
  this.radialChartOptions={
         
           series:[],
           
       chartOptions:{
            chart: {
              type: 'radialBar',
              height:250,
              offsetY: -20,
               animations: {
              enabled: false,
                easing: 'linear',
                speed: 12800,
              },
              sparkline: {
                enabled: true
              }
            },
           noData: {
  text: undefined,
  align: 'center',
  verticalAlign: 'middle',
  offsetX: 0,
  offsetY: 0,
  style: {
    color: undefined,
    fontSize: '14px',
    fontFamily: undefined
  }
},
            plotOptions: {
              radialBar: {
                hollow:{
                  margin:15,
                  size:'40%',
                  
                },
                startAngle: -90,
                endAngle: 90,
                offsetY:0,
                offsetX:0,
                width:150,
                track: {
                  background: "#e7e7e7",
                  strokeWidth: '97%',
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                  }
                },
                dataLabels: {
                  showOn:'always',
                  name: {
                    offsetY:0,
                    show: false,
                    
                    fontSize:'35px'
                  },
                  value: {
                    
                    fontSize: "15px",
                    show: true,
                     offsetY: -30
                   
                  },
                  total:{
                    formatter:function(){
                      return 500
                    }
                  }
                 
                  
                }
              }
            },
            grid: {
              padding: {
                top: -10
              }
            },
            fill: {
              type: 'gradient',
              
              gradient: {
                shade: 'light',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
              },
            },
            labels:[],
           colors: [function({ value }) {
  if (value > 100) {
      return "#FD354A"
  } else {
      return "#009AF9"
  }
}
]
                  
          
    }
          }
   }
}
</script>

<style scoped>

span{
  font-size: 36px;
  position: relative;
  bottom:50px;
}
.meter{
  
  
}
#gaugeChartApex{
  
}
</style>