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
    barChartClicked(val){
      console.log("The value clicked was "+val)
    }
    
  },
   computed:{...mapGetters(['allBarData'])

   },
   created(){
    // console.log("The date range is "+this.daterange)
     this.fetchBarData();
           setInterval(()=>{this.fetchBarData()},300000)
      this.arr=Object.entries(this.allBarData)

    
      
      this.arr.sort()
      for(let i=0; i<this.arr.length; i++){
     //   console.log("The value of the dates are "+this.arr[i][1])
       // this.dataName.push(this.arr[i][1].name)
      //  this.dataValue.push(this.arr[i][1].value)
      }
    
     // console.log("The data names are "+this.dataName)
//console.log("########################################")
this.arr.forEach(element => this.newArr.push((element[1].value[element[1].value.length-1]) - (element[1].value[0])
))
//console.log("The value of the new array is "+this.newArr)
this.arr.forEach(element =>this.dataName.push((element[1].name)))
this.arr.forEach(element => this.datesNow.push((element[1].dates)))
  // this.newDates=moment(this.datesNow)
for (let i=0; i<this.newArr.length; i++){
  
 

    for(let j=0; j<this.datesNow[i].length; j++){
        //  console.log(this.datesNow[i][j])
          let date=moment(this.datesNow[i][j]).format('MMMM D, YYYY')
      //    console.log(date)

          
          this.newDates.push(date)
       
    }

   // console.log(this.newDates)
   // console.log(this.daterange)
   // console.log(this.daterange.includes(this.newDates[this.newDates.length-1]))
     //  console.log("date before format")
      // console.log("Number of dates"+this.newDates.length)
      // console.log("The dates are",...this.newDates)
            //  console.log("*********************************************")
//
   //  let date=moment(this.datesNow[i]).format('MM Do YY, h:mm:ss a')
     // console.log("date", date);
 //   console.log("============================")
    }

       // console.log("Number of dates"+this.newDates)

//console.log(moment('2020-12-12'))
for(let i=0; i<this.dataName.length; i++){
  this.newNames.push(this.dataName[i].slice(6,11).split('_').join(' '))
}
//console.log("The values are "+this.newArr)


//console.log("New names are ")
//console.log(this.newNames)
///console.log(this.dataName)
//onsole.log(this.newArr)
//console.log(this.arr)


      this.barChart={
      
        
          
          series: [{
           
            data:[...this.newArr]
      }],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 380
            },
            xaxis: {
              type: 'date',
              labels:{},

              //categories:[...this.newNames],
             categories:[...this.newNames]
            
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