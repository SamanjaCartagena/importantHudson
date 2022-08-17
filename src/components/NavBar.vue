<template>
<div>

<select v-model="selectedValue" @change="selected" >
  <option disabled value="">Please select one</option>
<option>main</option>
  <option>PM1</option>
  <option>PM2</option>
  <option>PM3</option>
  <option>PM4</option>
    <option>BM5</option>
  <option>BM1</option>
  <option>LM2</option>
  <option>CM3</option>

</select>

{{selectedValue}}
</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import moment from 'moment'

export default{
  data(){
    return{
      selectedValue:'',
      value:'',
      value1:'',
      button1:'main'
    }
  },
    
  methods:{
    selected(){
      this.value = this.selectedValue.toLowerCase()
      
            this.$store.dispatch('changeRoute',this.value)
            setInterval(()=>{this.$store.dispatch('changeRoute',this.value)},3000)
      console.log("The value selected is "+this.value)
      this.$router.push({path:`/pmdashboard/${this.value}`})
     
     // this.$store.dispatch('changeRoute',this.value)
      console.log("the route has been changed to "+this.$store.state.currentRoute)
      this.$store.dispatch('fetchBarData')
      this.$store.dispatch('changeStartDate',this.$store.getters.start)
            this.$store.dispatch('changeEndDate',this.$store.getters.end)

      this.$store.dispatch('fetchGaugeData')
      
      
 
      this.$store.dispatch('fetchLineData')

      
      
      
    },
   selectedbtn1(){
   
      this.$router.push({path:`/pmdashboard/${main}`})

      this.$store.dispatch('changeRoute','main')
      this.$store.dispatch('fetchGaugeData')
      this.$store.dispatch('fetchLineData')
      this.$store.dispatch('fetchBarData')
   }
  }, mounted(){
         this.$store.dispatch('fetchBarData')
       
      this.$store.dispatch('fetchGaugeData')
      
      
 
      this.$store.dispatch('fetchLineData')

  }
}
</script>