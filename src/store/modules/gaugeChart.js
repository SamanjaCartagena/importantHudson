import axios from "axios"
import moment from "moment"
import store from "../../store"


 const state ={
   gaugeData:[],
   startDate:moment(),
   endDate:moment()
   
}
const getters ={
    allGaugeData:(state) => state.gaugeData,
        
}

const actions={
   async fetchGaugeData({commit}){
    
      const response= await axios.get(`/api`,{
        params:{
          startDate:store.state.starting,
          endDate:store.state.ending
        }
      })
    
  //  console.log('fetching gauge data two million times')
    console.table(response.data.apexGaugeChartData)
    commit('setGaugeData', response.data.apexGaugeChartData)
   }

}



const mutations={
    setGaugeData:(state,gaugeData) => (state.gaugeData = gaugeData)


}


export default {
    state, getters, actions, mutations
}