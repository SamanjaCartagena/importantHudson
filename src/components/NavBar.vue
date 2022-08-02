<template>
<div>
<input type="submit" v-model="button1" name="Main" @click="selectedbtn1"/>

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
      console.log("The value selected is "+this.value)
      this.$router.push({path:`/pmdashboard/${this.value}`})
      this.$router.go()

      this.$store.dispatch('changeRoute',this.value)
      console.log("the route has been changed to "+this.$store.state.currentRoute)
      this.$store.dispatch('fetchGaugeData',{root:true})
      this.$store.dispatch('fetchLineData',{root:true})
      this.$store.dispatch('fetchBarData' ,{root:true})
      
      
    },
   selectedbtn1(){
    console.log('btn1 has been selected')
    this.value1 = this.button1.toLowerCase()
      console.log("The value selected is "+this.value)
      this.$router.push({path:`/pmdashboard/${this.value1}`})
      this.$router.go()

      this.$store.dispatch('changeRoute',this.value1)
      this.$store.dispatch('fetchGaugeData',{root:true})
      this.$store.dispatch('fetchLineData')
      this.$store.dispatch('fetchBarData')
   }
  }
}
</script>