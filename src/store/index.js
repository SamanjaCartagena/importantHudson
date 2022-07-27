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
    
           
         
          start:moment(),
                  end:moment(),
                  

       

    },
    getters:{
        
    },
  
  plugins: [new VuexPersistence().plugin]


})
export default store