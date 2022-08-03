import axios from "axios"
import moment from "moment"
import store from '../../store'
 const state ={
   barData:[],
  
}
const getters ={
    allBarData:(state) => state.barData,
}
const actions={
 fetchBarData({commit}){
         
    axios.get(`/api/${store.getters.currentRoutes}`,{
        params:{
        startDate:store.getters.start,
        endDate:store.getters.end
      }
    }
    ).then(response=>{
    commit('setBarData', response.data.apexBarChartData)

    })
    
  // console.log("Bar chart data looks like")
 // console.log(`/api/${state.query}`)
  //  console.table(response.data.apexBarChartData)

 //   console.log(response.data.apexBarChartData)

}, 

  
}
const mutations={
    setBarData:(state,barData) => (state.barData = barData),

}


export default {
    state, getters, actions, mutations
}