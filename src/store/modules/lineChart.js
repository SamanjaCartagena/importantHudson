import axios from "axios"
import store from '../../store'
 const state ={
   lineData:[],
   lineDates:[],

}
const getters ={
    allLineData:(state) => state.lineData, 
    allLineDates:(state) => state.lineDates

}
const actions={
 fetchLineData({commit}){
         
    axios.get(`/api/${store.getters.currentRoutes}`,{
        params:{
        startDate:store.getters.start,
        endDate:store.getters.end
      }
    }
    ).then(response=>{
    commit('setLineDates',response.data.apexLineChartData.dates)
        commit('setLineData', response.data.apexLineChartData.data)

    })
}, 

  
}
 const mutations={
    setLineData:(state,lineData) => (state.lineData = lineData),
    setLineDates:(state, lineDates)=>(state.lineDates = lineDates),

}


export default {
    state, getters, actions, mutations
}