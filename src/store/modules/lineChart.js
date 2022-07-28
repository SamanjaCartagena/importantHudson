import axios from "axios"
import moment from 'moment'
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
async fetchLineData({commit}){
  
        
      const response= await axios.get(`/api`,{
        params:{
            startDate:store.state.starting,
            endDate:store.state.ending
        }
      })
   // console.table(response.data.apexLineChartData.data)

    commit('setLineDates',response.data.apexLineChartData.dates)
   commit('setLineData', response.data.apexLineChartData.data)


},


}
const mutations={
    setLineData:(state,lineData) => (state.lineData = lineData),
    setLineDates:(state, lineDates)=>(state.lineDates = lineDates),

}


export default {
    state, getters, actions, mutations
}