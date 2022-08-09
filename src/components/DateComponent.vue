<template>
  <div>
  <div class="block">
    <span class="demonstration">Date Range<br/></span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store';
import moment from 'moment';
const value2 = ref('')
const shortcuts = [
  {
    text: 'Today',
    value: () => {
      const end =moment().format('YYYY-MM-DD')
      const start = moment().format('YYYY-MM-DD')
    //  start.setTime(start.getTime())
            store.dispatch('changeStartDate',moment().format('YYYY-MM-DD'))
                  store.dispatch('changeEndDate',moment().format('YYYY-MM-DD'))
                  console.log("Start is "+start)
                  console.log("End is "+end)
                   setTimeout(()=>{  
        store.dispatch('changeStartDate',start),
              store.dispatch('changeEndDate',end)

},1000)
                     store.dispatch('fetchGaugeData')
                              store.dispatch('fetchLineData')
                              store.dispatch('fetchBarData')

      return [start, end]
    },
  },
  {
    text: 'Yesterday',
    value: () => {
      const end =moment().format('YYYY-MM-DD')
      const start = moment().subtract(1,'days').format('YYYY-MM-DD')
    //  start.setTime(start.getTime())
            store.dispatch('changeStartDate',start)
            
                  store.dispatch('changeEndDate',end)
             setTimeout(()=>{  
        store.dispatch('changeStartDate',start),
              store.dispatch('changeEndDate',end), 
                store.dispatch('fetchGaugeData')
                              store.dispatch('fetchLineData')
                              store.dispatch('fetchBarData')
               store.dispatch('fetchGaugeData')
                              store.dispatch('fetchLineData')
                              store.dispatch('fetchBarData')

},1000)
                            
                        
      return [start, end]
    },
  },
  {
    text: 'Last week',
    value: () => {
      const end = moment().format('YYYY-MM-DD')
      const start = moment().subtract(6,'days').format('YYYY-MM-DD')
     // start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      store.dispatch('changeStartDate',start)
      store.dispatch('changeEndDate', end)
        store.dispatch('fetchGaugeData')
                store.dispatch('fetchLineData')
                store.dispatch('fetchBarData')
       setTimeout(()=>{  
        store.dispatch('changeStartDate',start),
              store.dispatch('changeEndDate',end),
                store.dispatch('fetchGaugeData')
                              store.dispatch('fetchLineData')
                              store.dispatch('fetchBarData')

},1000)
       
                
      
      return [start, end]
    },
  },
  {
    text: 'Last month',
    value: () => {
      const end = moment().format('YYYY-MM-DD')
      const start = moment().subtract(30,'days').format('YYYY-MM-DD')
     // start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      store.dispatch('changeStartDate',start)
      store.dispatch('changeEndDate',end)
      setTimeout(()=>{  
        store.dispatch('changeStartDate',start),
              store.dispatch('changeEndDate',end),
                store.dispatch('fetchGaugeData')
                              store.dispatch('fetchLineData')
                              store.dispatch('fetchBarData')

},1000)
         store.dispatch('fetchGaugeData')
           store.dispatch('fetchLineData')
           store.dispatch('fetchBarData')
      console.log(store.state.starting)
            console.log(store.state.ending)
      return [start, end]
    },
  },
  {
    text: 'This month',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
]
</script>

<style>
</style>