import axios from "axios"
import moment from "moment"
import router from '../../router'


router.push('/')
const state ={
   lineData:[],
   lineDates:[],
   startDate:moment(),
   endDate:moment()
   

}
const getters ={
    allLineData:(state) => state.lineData, 
    allLineDates:(state) => state.lineDates

}
const actions={
async fetchLineData({commit}){
  
 
    
        
        const response= await axios.get(`/api${router.currentRoute.value.path}?startDate=${store.state.startingDate}&endDate=${store.state.endingDate}`)


   commit('setLineData', response.data.apexLineChartData.data)


},

async fetchLineDates({commit}){
         
       const response= await axios.get(`/api${router.currentRoute.value.path}?startDate=${store.state.startingDate}&endDate=${store.state.endingDate}`)

  //  console.table("The dates are "+response.data.apexLineChartData.dates)
    commit('setLineDates', response.data.apexLineChartData.dates)
},

}
const mutations={
    setLineData:(state,lineData) => (state.lineData = lineData),
    setLineDates:(state, lineDates)=>(state.lineDates = lineDates),

}


export default {
    state, getters, actions, mutations
}