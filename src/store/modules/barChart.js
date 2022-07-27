import axios from "axios"
import moment from "moment"
import router from '../../router'

router.push('/')

const state ={
   barData:[],
   startDate:moment().format('DD-MM-YYYY'),
   endDate:moment().format('DD-MM-YYYY')
}
const getters ={
    allBarData:(state) => state.barData,
}
const actions={
async fetchBarData({commit}){
         
       const response= await axios.get(`/api${router.currentRoute.value.path}`)


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