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
async fetchBarData({commit}){
         
    

      
      const response= await axios.get(`/api/${store.state.currentRoute}`,{
          params:{
        startDate:store.state.starting,
        endDate:store.state.ending
      }
      
    })
    
    
    

console.log("The starting from js script is "+store.state.starting)
  // console.log("Bar chart data looks like")
 // console.log(`/api/${state.query}`)
  //  console.table(response.data.apexBarChartData)

 //   console.log(response.data.apexBarChartData)
    commit('setBarData', response.data.apexBarChartData)

}, 

  
}
const mutations={
    setBarData:(state,barData) => (state.barData = barData),

}


export default {
    state, getters, actions, mutations
}