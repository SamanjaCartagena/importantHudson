import {createStore} from 'vuex';
import VuexPersistence from 'vuex-persist'
import gaugeChart from './modules/gaugeChart.js';
import lineChart from './modules/lineChart.js';
import barChart from './modules/barChart.js';
import moment from 'moment';
import createPersistedState from 'vuex-persistedstate'

const store=createStore({
  modules:{
    nameSpaced:true,
     gaugeChart, lineChart, barChart
  },
    state:{
    
           
         
          starting:moment().format('YYYY-MM-DD'),
          ending:moment().format('YYYY-MM-DD'),
          currentRoute:'main',
          arr:[]                  

              

    },
    getters:{
        currentRoutes(state){
           return state.currentRoute
        },
        start(state){
          return state.starting
        },
        end(state){
          return state.ending
        },
        arr(state){
          return state.arr
        }
    },
    actions:{
      changeRoute ({ commit },payload) {
        console.log('Fetch gauge data has been dispatched')
      commit('changeRoute', payload)
      },
      async  changeStartDate ({ commit },payload) {
        return Promise.resolve(commit('changeStartDate', payload))
        },
      async  changeEndDate ({ commit },payload) {
        return Promise.resolve(commit('changeEndDate', payload))
          },
          async  changeArr ({ commit },payload) {
            return Promise.resolve(commit('changeArr', payload))
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
      },
      changeArr(state, payload){
        state.arr=payload
      },
      
      
    },
  
  plugins: [new VuexPersistence().plugin, createPersistedState()]


})
export default store