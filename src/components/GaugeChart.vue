<template>
  <div>
<div style="width:100%;" > 
                   <el-card class="box-card" style="width:100%">

    <el-space :fill="fill" wrap>
      <el-card v-for="(item, index) in arr" :key="index" 
      class="box-card" 
      style="width:35%;height:250px">
    
        
          <div class="card-header">
            
                        <span style="font-size:20px; position: relative;
                        top:20px">{{item.name.slice(6,11).split('_').join(' ')}}</span>

            <apexchart id="gaugeChartApex" 
          
        type="radialBar" width="100%" height="250px" 
        :options="this.radialChartOptions.chartOptions"
      
         :series="[this.percent[index]]" ></apexchart>
         <center>
         <span v-if="this.percent[index]>100" style="color:#FD354A">{{this.lastValues[index]}}</span>
          <span v-else style="color:#009AF9">{{this.lastValues[index]}}</span>
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
import HomePage from '../components/HomePage.vue';
export default {
  props:['dateValue', 'daterange','crumbs'],
  data(){
   return{
     newArr:[],
     arr:[],
     lastValues:[],
     finalDates:[],
     newDate:'',
     percent:[],
     names:[],
     slicedDate:[],
     finalNames:[],
     today:moment().format('MMMM D, YYYY'),
     dateTesting:'May 9, 2022',
   }
  },
  methods:{
    ...mapActions(['fetchGaugeData']),
     moment: function (value) {
    return moment(value);
  },
  clicked(val){
    console.log('this was clicked '+val)


     for(let i=0; i<this.arr.length; i++){
for(let j=0; j<this.arr[i].dates.length; j++){
{
 // if((moment(this.arr[i].dates[j]).format('DD-MM-YYYY') >=this.$store.state.startDate )
   // && (moment(this.arr[i].dates[j]).format('DD-MM-YYYY') <= this.$store.state.endDate ))
  //{
console.log(moment(this.arr[i].dates[j]).format('DD-MM-YYYY'));

  //}
}
 
}
     }




 


  
  }
  
  },
   computed:{...mapGetters(['allGaugeData']),
 

   },
   mounted(){
 
   },
   created(){
  
     this.fetchGaugeData();

     setInterval(()=>{this.fetchGaugeData()},5000)
    console.log("The date is "+this.$store.startingDate)
    console.log("The end date is "+this.$store.endingDate)
   //  console.table(this.allGaugeData)
    //console.log("The dates passed from props are "+this.daterange)
     this.newArr=Object.entries(this.allGaugeData)
     //console.log("The new array for gauge is from this.arr is")
     this.newArr.sort()
     
    //console.log("The value for new arr is")
  // console.table(this.newArr)
   
     this.newArr.forEach(element => this.arr.push(element[1]))
    // console.log("The arr values are ")
     //console.table(this.arr)
     for(let i=0; i<this.arr.length;i++){
    //  console.log(this.arr[i].name)
      this.names.push(this.arr[i].name)
      this.finalNames.push(this.names[i].toLowerCase().slice(6,11).split('_').join(''))
     // console.log(this.finalNames[i])
     }

    // console.log(this.names)
    // console.log("The names are ")
     for(let i=0; i<this.arr.length; i++){
   
     
for(let j=0; j<this.arr[i].dates.length; j++){

 
}

for(let i=0;i<this.finalDates.lenth;i++){
  this.slicedDate.push(this.finalDates[i].slice(' ').join(''))
}

     }
        
for(let i=0; i<this.arr.length; i++){
 // console.log(moment(this.arr[i].dates).format('DD-MM-YYYY'))
}
 //    this.arr[i].dates.forEach((element)=> console.log(this.arr[i].dates))
     
  //   console.log("The date is from props")

//     console.log(moment(this.dateValue).format('DD-MM-YYYY'))
     for(let i=0; i<this.arr.length; i++){
    Math.round(this.lastValues.push(this.arr[i].value[this.arr[i].value.length-1]))
    
    
     }

     
    // console.log(this.lastValues)
     for(let i=0; i<this.lastValues.length; i++){
      this.percent.push((this.lastValues[i] *100/400).toFixed())
     }
    // console.log(this.percent)
 this.$watch(
      () => this.$route.params.pageName,
      () => {
             this.fetchGaugeData();
       if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
        console.log("The params have changed")
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
   
    // console.log("The last values are "+this.lastValues)
      //   console.log("The value of arr's length is "+this.arr.length)
   //  console.log(this.arr.dates)
     
    // console.log("======================================")
   //  console.log(this.finalDates)
    // console.table(this.newArr)
     //console.log(this.allGaugeData)
     this.radialChartOptions={
         
           series:[],
           
          chartOptions: {
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
                     offsetY: -50
                   
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
.vue-apexcharts-tooltip.markers.fillColors{
  color:red
}
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