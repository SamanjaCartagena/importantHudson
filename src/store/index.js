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
          currentRoute:'bm1'
                  

              

    },
    getters:{
        currentRoutes(state){
           return state.currentRoute
        }
    },
    actions:{
      changeRoute ({ commit }) {
        commit('changeRoute')
      }
    },
    mutations:{
      changeRoute (state) {
        state.currentRoute ='main'
      }
    },
  
  plugins: [new VuexPersistence().plugin]


})
export default store