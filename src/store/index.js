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
          arr:[],
          dat:0, 
          pmName:[],
          pmValues:[], clickIndex:0,
          port:3080,
          met:''

              

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
        },
        pmName(state){
          return state.pmName
        },
        pmValue(state){
          return state.pmValues
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
              },
              async changePmName({commit},payload){
                            return Promise.resolve(commit('changePmName', payload))

              },
                async changePmValues({commit},payload){
                            return Promise.resolve(commit('changePmValues', payload))

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
        changePmName(state, payload){
        state.pmName=payload
      },
      changePmValues(state,payload){
        state.pmValues= payload
      }
    },
  
  plugins: [new VuexPersistence().plugin, createPersistedState()]


})
export default store