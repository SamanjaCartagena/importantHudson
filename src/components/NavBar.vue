<template>
<div>
<select v-model="selectedValue" @change="selected">
<option>Main</option>
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
      selectedValue:null,
      value:'',
    }
  },
  methods:{
    selected(){
      this.value = this.selectedValue.toLowerCase()
      console.log("The value selected is "+this.value)
      this.$router.push({path:`/pmdashboard/${this.value}`})
      this.$store.dispatch('changeRoute',this.value)
      this.$store.dispatch('fetchGaugeData',this.value)
      this.$store.dispatch('fetchLineData')
      this.$store.dispatch('fetchBarData')
    },
    ...mapActions(['fetchGaugeData'],['fetchLineData'],['fetchBarData']),
     moment: function (value) {
    return moment(value);
  },

  }

}

</script>