import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import store from '../store'
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        redirect:'/main_meters',
        name:'main_meters',
        component: HomePage,
      
    },
    
    {
        path:'/:pageName',
        name:'pageName',
        component:HomePage,
      params:{
        startDate:store.state.start,
        endDate:store.state.end
     }
     
     
     
    
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