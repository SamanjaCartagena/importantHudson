<template>
<div>
<select v-model="selectedValue" @change="select($event.target.value)">
  <option>PM1</option>
  <option>PM2</option>
  <option>PM3</option>
  <option>PM4</option>
</select>

{{selectedValue}}
</div>
</template>
<script>
export default{
  data(){
    return{
      selectedValue:null,
      value:'',
    }
  },methods:{
    select(val){
      this.value = val.toLowerCase()
      console.log("The value selected is "+this.value)
      this.$router.push({path:`/pmdashboard/${this.value}`})
      this.$store.dispatch('changeRoute',this.value)
    }
  }

}

</script>