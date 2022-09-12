import axios from "axios"
import store from "../../store"

const state ={
   gaugeData:[],
    lineData:[],
   lineDates:[],
   names:[],
   values:[]
   
   
}
 const getters ={
    allGaugeData:(state) => state.gaugeData,
           allLineData:(state) => state.lineData, 
    allLineDates:(state) => state.lineDates,
    allNames:(state) => state.names,
    allValues:(state) => state.values
    
}

 const actions={
 async fetchGaugeData({commit}){
         
  await  axios.get(`/api/${store.getters.currentRoutes}`,{
        params:{
        startDate:store.getters.start,
        endDate:store.getters.end
      }
    }
    ).then(response=>{
      
    commit('setGaugeData', response.data.apexGaugeChartData)
       commit('setLineDates',response.data.apexLineChartData.dates)
        commit('setLineData', response.data.apexLineChartData.data)
           var data= Object.entries(response.data.apexBarChartData)   
           console.log("The data is ")
         data.sort()
           store.dispatch('calcNames',data,{root:true})
        
    })
}, 
calcNames({commit,dispatch},data){

 var newNames=[];              var values=[];

for(let i=0; i<data.length; i++){
   newNames.push(data[i][1].name.slice(6,11).split('_').join(' '))
     values.push((data[i][1].value[data[i][1].value.length-1]) - (data[i][1].value[0]))

}
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
},

 }
  


const mutations={
    setGaugeData:(state,gaugeData) => (state.gaugeData = gaugeData),
    setLineData:(state,lineData) => (state.lineData = lineData),
    setLineDates:(state, lineDates)=>(state.lineDates = lineDates),
        setName:(state,newNames) => (state.names = newNames),
                setValues:(state,values) => (state.values = values),


}


export default {
    state, getters, actions, mutations
}