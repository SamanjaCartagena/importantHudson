import axios from "axios"
import moment from "moment"
import store from "../../store"

const state ={
   gaugeData:[],
   
   
}
 const getters ={
    allGaugeData:(state) => state.gaugeData,
        
}

 const actions={
 fetchGaugeData({commit}){
         
    axios.get(`/api/${store.getters.currentRoutes}`,{
        params:{
        startDate:store.getters.start,
        endDate:store.getters.end
      }
    }
    ).then(response=>{
    commit('setGaugeData', response.data.apexGaugeChartData)

    })
    
  // console.log("Bar chart data looks like")
 // console.log(`/api/${state.query}`)
  //  console.table(response.data.apexBarChartData)

 //   console.log(response.data.apexBarChartData)

}, 

  
}
  


const mutations={
    setGaugeData:(state,gaugeData) => (state.gaugeData = gaugeData)


}


export default {
    state, getters, actions, mutations
}