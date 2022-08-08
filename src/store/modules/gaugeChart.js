import axios from "axios"
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
        startDate:store.state.starting,
        endDate:store.state.ending
      }
    }
    ).then(response=>{
    
    commit('setGaugeData', response.data.apexGaugeChartData)

    })
    
  // console.log("Bar chart data looks like")

 //   console.log(response.data.apexBarChartData)

}, 

  
}
  


const mutations={
    setGaugeData:(state,gaugeData) => (state.gaugeData = gaugeData)


}


export default {
    state, getters, actions, mutations
}