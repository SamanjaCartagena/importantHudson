import axios from "axios"
import store from '../../store'
 const state ={
   barData:[],
   names:[],
   values:[]
  
}
const getters ={
    allBarData:(state) => state.barData,
    allNames:(state) => state.names,
    allValues:(state) => state.values
    
}
const actions={
 fetchBarData({commit,dispatch}){
         
    axios.get(`/api/${store.getters.currentRoutes}`,{
        params:{
        startDate:store.getters.start,
        endDate:store.getters.end
      }
    }
    ).then(response=>{
                  console.log("The bar chart data is")
                  
         var data= Object.entries(response.data.apexBarChartData)    
         data.sort()
           dispatch('calcNames',data,{root:true})
         return Promise.resolve(commit('setBarData', data))
      
       
    })
},
calcNames({commit,dispatch},data){
 console.log(data)
 var newNames=[];
for(let i=0; i<data.length; i++){
   console.log(data[i][1])
   newNames.push(data[i][1].name.slice(6,11).split('_').join(' '))
}
console.log(newNames)

return dispatch('calcValues',data,{root:true}).then(()=>{

  commit('setName', newNames)
})

},
calcValues({commit},data){
              var values=[];
for(let i=0; i<data.length; i++){
  values.push((data[i][1].value[data[i][1].value.length-1]) - (data[i][1].value[0]))


}
  return Promise.resolve(commit('setValues', values))
}
}
const mutations={
    setBarData:(state,barData) => (state.barData = barData),
        setName:(state,newNames) => (state.names = newNames),
                setValues:(state,values) => (state.values = values),


}


export default {
    state, getters, actions, mutations
}