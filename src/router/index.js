import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import store from '../store'
import moment from 'moment'
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        
   
        component: HomePage,
        
        params:{
            startDate:moment().format(),
            endDate:moment().format()
        }
      
    },
    
    {
        path:'/main_meters/:pageName',
        name:'pageName',
        component:HomePage,
       
    },

      
    /**  {
        path:'/catchAll(.*)',
          name:'NotFound',
        component:NotFound
    }
    **/


    
  
]

});

export default router;