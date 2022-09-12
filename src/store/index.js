import {createStore} from 'vuex';
import VuexPersistence from 'vuex-persist'
import gaugeChart from './modules/gaugeChart.js';
import moment from 'moment'
import createPersistedState from 'vuex-persistedstate'

const store=createStore({
  modules:{
    nameSpaced:true,
     gaugeChart
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
          met:'',
          routePage:'',
          names:[],
          values:[],
          
         
              

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
        },
        routePage(state){
          return state.routePage
        }, 
        names(state){
          return state.names
        },
        values(state){
          return state.values
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

              }, 
              async changeRoutePage({commit}, payload){
                return Promise.resolve(commit('changeRoutePage', payload))
              }, 
              changeNames({commit}, payload){
                commit('changeNames',payload)
              },
               changeValues({commit},payload){
                commit('changeValues',payload)
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
      }, 
      changeRoutePage(state,payload){
        state.payload= payload
      },
      changeNames(state,payload){
        state.names=payload
      },
      changeValues(state,payload){
        state.values=payload
      }
    },
  
  plugins: [new VuexPersistence().plugin, createPersistedState()]


})
export default store