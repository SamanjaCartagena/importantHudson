<template>
  <div>
   
  <header>

 <nav-bar/>
</header>
<div style="height:300px; display:grid; ">

  <br/>
  
  <div style="justify-items:start" id="app container">
 <bread-crumb class="row justify-content-center mt-4" :crumbs="crumbs"
 @selected="selectCrumb"
 >
 </bread-crumb>
 {{selectedOption}}
  </div>


</div>
<div class="container1" style="width:100%; text-align:center">
 
   <div class="container2" style="width:100%">
     <div style="float:right; position:relative; bottom:200px">
  <date-component></date-component>
   </div>
    <div class="meterContainers">
<div class="item1">
  
 <gauge-chart ></gauge-chart>
</div>
<div class="item2">
 <line-chart  ></line-chart>
</div>
<div class="item3">
 <bar-chart ></bar-chart>
</div>
<div class="item4">
<page-view></page-view>
</div>
   </div>
   </div>
</div>

  </div>    

 
</template>

<script>
import GaugeChart from './GaugeChart.vue'
import BarChart from './BarChart.vue'
import LineChart from './LineChart.vue'
import PageView from './PageView.vue'
import moment from 'moment'
import NavBar from './NavBar.vue'
import BreadCrumb from './BreadCrumb.vue'
import App from '../App.vue'
import DateComponent from './DateComponent.vue'


export default {

  data(){
    return{
       crumbs:['Home','Main meters'],
       refValue:3,
       starting:null,
       ending:null,
       val:2,
       selectedOption:moment().format('MMMM D, YYYY'),
       checked:null,
       reportingrange:'',
       
       datePicked:'',
       
          
          
}
  },
    
  components: {
    GaugeChart,
    BarChart, 
    LineChart,
    PageView, 
    NavBar,
    App,
    BreadCrumb,
    DateComponent
  
  },
  mounted(){
  
   
},


  
  
  created(){
   var url= window.location.href+`?startDate=${this.$store.state.startDate}&endDate=${this.$store.state.endDate}`
var searchParams = new URLSearchParams(`startDate=${this.$store.state.startDate}&endDate=${this.$store.state.endDate}`);
for(var value of searchParams.values()) {
  console.log(value);
}
console.log("The selected option is "+this.selectedOption)
    
  
console.log(url)
 var option= this.selectedOption.split(' - ')
 console.log(option[0])

//this.starting = moment().subtract(29, 'days').format('MMMM D, YYYY');
  //     this.ending = moment().format('MMMM D YYYY');
  

},
   
  methods:{
   release(){
    this.datePicked=moment(this.datePicked).format('DD-MM-YYYY')
   },
   selectCrumb(crumb){
      console.log(crumb);
      
    },
  selected(val){
  console.log(val)
  var option= val.split(' - ')
  console.log(option)
  this.$store.state.startDate= moment(option[0]).format('DD-MM-YYYY')
  this.$store.state.endDate= moment(option[1]).format('DD-MM-YYYY')
 


  
},
 
  

   
  },


}
</script>

<style>
body{
    background-color: #f3f3f4;

}
.datePicker{
  
  display: grid;
  justify-content: end;
  align-content: end;
  width:100%;
    grid-template-columns: auto;

  z-index: 2;
}

.container2{
  align-items: start;
  justify-content: start;
  grid-template-columns: auto;

  grid-gap: 20px;
}

.container1{
  width:100%;
  height:auto;
display: grid;

}
.meterContainers{
  grid-gap: 30px;
  display: grid;

}
.item1{
    background-color: white;
    width:100%;
    justify-content: flex-end;
    align-content: stretch;
      grid-template-columns: auto;


   
}
.item2{
    background-color: white;
    width:100%;
    justify-content: flex-end;
    justify-items: flex-end;
    
      grid-template-columns: auto;

}
.item3{
    background-color: white;
    width:100%;
    justify-content: end;
      grid-template-columns: auto;


}
.item4{
    background-color: white;
    width:100%;
    justify-content: flex-end;
    justify-items: flex-end;
    height:400px;
      grid-template-columns: auto;

}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>