import {createStore} from 'vuex';
import VuexPersistence from 'vuex-persist'
import gaugeChart from './modules/gaugeChart.js';
import lineChart from './modules/lineChart.js';
import barChart from './modules/barChart.js';
import moment from 'moment';

const store=createStore({
  modules:{
    nameSpaced:true,
     gaugeChart, lineChart, barChart
  },
    state:{
    
           
         
          starting:moment().format('YYYY-MM-DD'),
          ending:moment().format('YYYY-MM-DD'),
          currentRoute:'main'
                  

              

    },
    getters:{
        currentRoutes(state){
           return state.currentRoute
        }
    },
    actions:{
     async  changeRoute ({ commit },payload) {
      return Promise.resolve(commit('changeRoute', payload))
      },
      async  changeStartDate ({ commit },payload) {
        return Promise.resolve(commit('changeStartDate', payload))
        },
        async  changeEndDate ({ commit },payload) {
          return Promise.resolve(commit('changeEndDate', payload))
          }
    },
    mutations:{
      changeRoute (state,payload) {
        state.currentRoute =payload
      },
      changeStartDate (state,payload) {
        state.starting =payload
      },
      changeEndDate(state, payload){
        state.ending=payload
      }
    },
  
  plugins: [new VuexPersistence().plugin]


})
export default store