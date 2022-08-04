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
           dispatch('calcData',data,{root:true})
         return Promise.resolve(commit('setBarData', data))
      
       
    })
},
calcData({commit},data){
 console.log(data)
 var newNames=[];
          var values=[];
for(let i=0; i<data.length; i++){
   console.log(data[i][1])
   newNames.push(data[i][1].name.slice(6,11).split('_').join(' '))
  values.push((data[i][1].value[data[i][1].value.length-1]) - (data[i][1].value[0]))
}
console.log(values)
           commit('setValues',values)

  return Promise.resolve(commit('setName', newNames))
      

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