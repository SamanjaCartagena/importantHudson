<template>
<div>
  <button @click="selectMain($event.target.value)">main</button>
<select v-model="selectedValue" @change="selected" >
<option>main</option>
  <option>PM1</option>
  <option>PM2</option>
  <option>PM3</option>
  <option>PM4</option>
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
      this.$store.dispatch('fetchGaugeData')
      this.$store.dispatch('fetchLineData')
      this.$store.dispatch('fetchBarData')
    },
   selectMain(val){
    console.log("The value selected is "+val)
   }
  }
}
</script>