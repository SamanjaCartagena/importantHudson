import axios from "axios"
import moment from "moment"


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
    try{
        
    const response= await axios.get(`/api`,{
  
    })
    
  //  console.log('fetching gauge data two million times')
    console.table(response.data.apexGaugeChartData)
    commit('setGaugeData', response.data.apexGaugeChartData)
   }
   catch(err){
    
      router.replace({ name: 'NotFound' })       
   }
}
}


const mutations={
    setGaugeData:(state,gaugeData) => (state.gaugeData = gaugeData)


}


export default {
    state, getters, actions, mutations
}